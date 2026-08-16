import { FALLBACK_MODEL_CHAIN } from "./src/types";

export interface GenerateOptions {
  model?: string;
  prompt: string;
  maxRetriesPerModel?: number;
  initialBackoffMs?: number;
  backoffFactor?: number;
  // Custom generator function (useful for tests and actual Gemini API invocation)
  generator?: (model: string, prompt: string) => Promise<any>;
}

export function isTransientError(error: unknown): boolean {
  if (!error) return false;

  const err = error as { status?: number; statusCode?: number; code?: number | string; message?: string };
  const status = err.status ?? err.statusCode ?? (typeof err.code === "number" ? err.code : undefined);
  const codeStr = String(err.code || "").toUpperCase();
  const messageStr = String(err.message || "").toLowerCase();

  // 1. Explicit Permanent Error Checks
  // If status is 404, 400, 401, or 403 -> Permanent
  if (status === 404 || status === 400 || status === 401 || status === 403) {
    return false;
  }

  // If code or message indicates NOT_FOUND or 404 or bad request/auth -> Permanent
  if (
    codeStr === "NOT_FOUND" ||
    codeStr === "INVALID_ARGUMENT" ||
    codeStr === "UNAUTHENTICATED" ||
    codeStr === "PERMISSION_DENIED" ||
    messageStr.includes("not found") ||
    messageStr.includes("404") ||
    messageStr.includes("invalid argument") ||
    messageStr.includes("unauthorized") ||
    messageStr.includes("forbidden")
  ) {
    return false;
  }

  // 2. Explicit Transient Error Checks
  // Status 429, 503, 500
  if (status === 429 || status === 503 || status === 500) {
    return true;
  }

  if (
    codeStr === "RESOURCE_EXHAUSTED" ||
    codeStr === "UNAVAILABLE" ||
    codeStr === "INTERNAL" ||
    messageStr.includes("429") ||
    messageStr.includes("503") ||
    messageStr.includes("500") ||
    messageStr.includes("rate limit") ||
    messageStr.includes("quota") ||
    messageStr.includes("service unavailable") ||
    messageStr.includes("high demand") ||
    messageStr.includes("internal server error")
  ) {
    return true;
  }

  // Default: treat unknown non-HTTP non-recognized errors as non-transient to prevent infinite backoff loops
  return false;
}

export async function generateWithRetryAndFallback<T = any>(
  options: GenerateOptions
): Promise<{ result: T; modelUsed: string; attempts: number }> {
  const requestedModel = options.model || FALLBACK_MODEL_CHAIN[0] || "gemini-3.7-flash";
  const maxRetries = options.maxRetriesPerModel ?? 3;
  const initialBackoffMs = options.initialBackoffMs ?? 1000;
  const backoffFactor = options.backoffFactor ?? 2;

  // Build model fallback sequence: requested model first, then remaining fallbacks
  const modelSequence: string[] = [
    requestedModel,
    ...FALLBACK_MODEL_CHAIN.filter((m) => m !== requestedModel),
  ];

  let totalAttempts = 0;
  let lastError: any = null;

  for (const currentModel of modelSequence) {
    let attemptForModel = 0;

    while (attemptForModel < maxRetries) {
      attemptForModel++;
      totalAttempts++;

      try {
        if (!options.generator) {
          throw new Error("No generator function provided");
        }
        const result = await options.generator(currentModel, options.prompt);
        return {
          result,
          modelUsed: currentModel,
          attempts: totalAttempts,
        };
      } catch (error) {
        lastError = error;

        // If error is permanent (e.g. 404, NOT_FOUND), fail IMMEDIATELY on this model
        // and jump to the next fallback model without retrying or backoff delay.
        if (!isTransientError(error)) {
          break; // Break the retry loop for this model -> advances to next model in sequence
        }

        // If transient error and we still have retry attempts remaining for this model, backoff and retry
        if (attemptForModel < maxRetries) {
          const delay = initialBackoffMs * Math.pow(backoffFactor, attemptForModel - 1);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }
  }

  throw lastError || new Error("All fallback models failed");
}
