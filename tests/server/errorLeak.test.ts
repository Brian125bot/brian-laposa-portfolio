import { describe, it, expect } from "vitest";
import { detectErrorLeak } from "../../errorLeak";

describe("errorLeak.ts - Multi-Signal Leak Detection", () => {
  it("does NOT flag technical interview text containing standalone 'Exception:' or 'Error:'", () => {
    const text1 = "In Java, an Exception: NullPointerException occurs when accessing null references.";
    const res1 = detectErrorLeak(text1);
    expect(res1.withheld).toBe(false);
    expect(res1.sanitizedText).toBe(text1);

    const text2 = "Describe a time you handled a production bug: Error: System Out of Memory was thrown during peak load.";
    const res2 = detectErrorLeak(text2);
    expect(res2.withheld).toBe(false);
    expect(res2.sanitizedText).toBe(text2);
  });

  it("FLAGS leaks when exception header is accompanied by file paths", () => {
    const leakText = "Error: Unhandled exception in server request\n at /var/app/server/index.ts:45:12";
    const res = detectErrorLeak(leakText);
    expect(res.withheld).toBe(true);
    expect(res.sanitizedText).toBe("[Output Withheld: System/Internal Trace Leak Detected]");
  });

  it("FLAGS leaks when stack frame indicators are present", () => {
    const leakText = "TypeError: Cannot read properties of undefined\n at Object.<anonymous> (server.ts:10:15)";
    const res = detectErrorLeak(leakText);
    expect(res.withheld).toBe(true);
    expect(res.sanitizedText).toBe("[Output Withheld: System/Internal Trace Leak Detected]");
  });

  it("FLAGS leaks when Traceback header is present", () => {
    const leakText = "Traceback (most recent call last):\n File 'app.py', line 10, in <module>";
    const res = detectErrorLeak(leakText);
    expect(res.withheld).toBe(true);
    expect(res.sanitizedText).toBe("[Output Withheld: System/Internal Trace Leak Detected]");
  });
});
