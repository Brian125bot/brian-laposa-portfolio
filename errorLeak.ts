export interface LeakDetectionResult {
  withheld: boolean;
  sanitizedText: string;
  detectedPatterns?: string[];
}

export const EXCEPTION_HEADER_RE = /\b\w*(?:Error|Exception)\s*:/i;
export const FILE_PATH_RE = /(?:\/[\w.-]+)+\.\w+:\d+(?::\d+)?|[a-zA-Z]:\\(?:[\w.-]+\\)+\.\w+:\d+(?::\d+)?|\b[\w.-]+\.(?:js|ts|jsx|tsx|py|java|cpp|c|cs|go|rb|php):\d+(?::\d+)?/i;
export const STACK_FRAME_RE = /\b(?:at\s+(?:async\s+)?[\w.<>$]+(?:\s+\([^)]+\))?|in\s+[\w.<>$]+\s+at\s+[\w/.-]+:\d+)/i;
export const TRACEBACK_RE = /\b(?:Traceback\s+\(most\s+recent\s+call\s+last\)|Stack\s+trace)\s*:/i;

export function detectErrorLeak(text: string): LeakDetectionResult {
  if (!text || typeof text !== "string") {
    return { withheld: false, sanitizedText: text || "" };
  }

  const detectedPatterns: string[] = [];

  const hasExceptionHeader = EXCEPTION_HEADER_RE.test(text);
  const hasFilePath = FILE_PATH_RE.test(text);
  const hasStackFrame = STACK_FRAME_RE.test(text);
  const hasTracebackHeader = TRACEBACK_RE.test(text);

  // 1. Traceback header alone is a strong multi-signal indicator of a runtime stack trace
  if (hasTracebackHeader) {
    detectedPatterns.push("TRACEBACK_HEADER");
  }

  // 2. Exception header requires corroborating structural signals (file path or stack frame)
  if (hasExceptionHeader && (hasFilePath || hasStackFrame)) {
    detectedPatterns.push("EXCEPTION_WITH_CORROBORATION");
  }

  // 3. Stack frame combined with file path is also a leak
  if (hasStackFrame && hasFilePath) {
    detectedPatterns.push("STACK_FRAME_WITH_FILE_PATH");
  }

  if (detectedPatterns.length > 0) {
    return {
      withheld: true,
      sanitizedText: "[Output Withheld: System/Internal Trace Leak Detected]",
      detectedPatterns,
    };
  }

  return {
    withheld: false,
    sanitizedText: text,
  };
}
