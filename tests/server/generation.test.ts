import { describe, it, expect, vi } from "vitest";
import { isTransientError, generateWithRetryAndFallback } from "../../server";
import { FALLBACK_MODEL_CHAIN } from "../../src/types";

describe("server.ts - Error Classification (isTransientError)", () => {
  it("classifies 404 and NOT_FOUND as non-transient (permanent)", () => {
    expect(isTransientError({ status: 404, message: "Model not found" })).toBe(false);
    expect(isTransientError({ statusCode: 404 })).toBe(false);
    expect(isTransientError({ code: "NOT_FOUND", message: "Resource not found" })).toBe(false);
    expect(isTransientError(new Error("models/gemini-custom was not found"))).toBe(false);
  });

  it("classifies 400, 401, 403 as non-transient (permanent)", () => {
    expect(isTransientError({ status: 400, message: "Invalid argument" })).toBe(false);
    expect(isTransientError({ status: 401, message: "Unauthorized API key" })).toBe(false);
    expect(isTransientError({ status: 403, message: "Permission denied" })).toBe(false);
  });

  it("classifies 429, 503, and 500 as transient", () => {
    expect(isTransientError({ status: 429, message: "Rate limit exceeded" })).toBe(true);
    expect(isTransientError({ status: 503, message: "Service unavailable" })).toBe(true);
    expect(isTransientError({ status: 500, message: "Internal server error" })).toBe(true);
    expect(isTransientError({ code: "RESOURCE_EXHAUSTED" })).toBe(true);
    expect(isTransientError(new Error("503 High Demand"))).toBe(true);
  });
});

describe("server.ts - generateWithRetryAndFallback", () => {
  it("fails immediately on 404 without retrying same model and falls back to next model", async () => {
    const attempts: { model: string }[] = [];

    const generator = vi.fn().mockImplementation(async (model: string) => {
      attempts.push({ model });
      if (model === "invalid-custom-model") {
        throw { status: 404, message: "Model invalid-custom-model not found" };
      }
      return "Success response from " + model;
    });

    const startTime = Date.now();
    const res = await generateWithRetryAndFallback({
      model: "invalid-custom-model",
      prompt: "Test prompt",
      generator,
      maxRetriesPerModel: 3,
      initialBackoffMs: 1000,
    });

    const duration = Date.now() - startTime;

    expect(res.result).toBe("Success response from gemini-3.7-flash");
    expect(res.modelUsed).toBe("gemini-3.7-flash");
    // Invalid model tried exactly 1 time (no 3x backoff retries), then gemini-3.7-flash tried 1 time
    expect(attempts).toEqual([
      { model: "invalid-custom-model" },
      { model: "gemini-3.7-flash" },
    ]);
    // Duration should be under 500ms since 404 does not delay/backoff
    expect(duration).toBeLessThan(500);
  });

  it("retries on transient 429 error with backoff before succeeding", async () => {
    let attemptsCount = 0;
    const generator = vi.fn().mockImplementation(async (model: string) => {
      attemptsCount++;
      if (model === "gemini-3.7-flash" && attemptsCount < 2) {
        throw { status: 429, message: "Rate limit exceeded" };
      }
      return "Success after retry";
    });

    const res = await generateWithRetryAndFallback({
      model: "gemini-3.7-flash",
      prompt: "Test prompt",
      generator,
      maxRetriesPerModel: 3,
      initialBackoffMs: 10,
    });

    expect(res.result).toBe("Success after retry");
    expect(res.modelUsed).toBe("gemini-3.7-flash");
    expect(attemptsCount).toBe(2);
  });

  it("derives fallback sequence from FALLBACK_MODEL_CHAIN and respects requested model first", async () => {
    const attemptedModels: string[] = [];
    const generator = vi.fn().mockImplementation(async (model: string) => {
      attemptedModels.push(model);
      if (model !== "gemini-3.5-flash") {
        throw { status: 404, message: `${model} not found` };
      }
      return "OK";
    });

    const res = await generateWithRetryAndFallback({
      model: "gemini-3.7-flash",
      prompt: "Hello",
      generator,
      maxRetriesPerModel: 3,
      initialBackoffMs: 1,
    });

    expect(res.result).toBe("OK");
    expect(res.modelUsed).toBe("gemini-3.5-flash");
    expect(attemptedModels).toEqual([
      "gemini-3.7-flash",
      "gemini-3.6-flash",
      "gemini-3.5-flash",
    ]);
  });
});
