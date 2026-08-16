export interface GeminiModelConfig {
  id: string;
  name: string;
  description?: string;
  isDefault?: boolean;
}

export const FALLBACK_MODEL_CHAIN: readonly string[] = [
  "gemini-3.7-flash",
  "gemini-3.6-flash",
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-3.0-flash",
] as const;

export const AVAILABLE_GEMINI_MODELS: readonly GeminiModelConfig[] = [
  {
    id: "gemini-3.7-flash",
    name: "Gemini 3.7 Flash",
    description: "Next-gen multimodal performance and speed",
    isDefault: true,
  },
  {
    id: "gemini-3.6-flash",
    name: "Gemini 3.6 Flash",
    description: "Balanced speed and quality",
  },
  {
    id: "gemini-3.5-flash",
    name: "Gemini 3.5 Flash",
    description: "Fast reasoning and general performance",
  },
  {
    id: "gemini-3.5-flash-lite",
    name: "Gemini 3.5 Flash Lite",
    description: "Lightweight and high throughput",
  },
  {
    id: "gemini-3.1-flash-lite",
    name: "Gemini 3.1 Flash Lite",
    description: "Ultra-fast low latency model",
  },
  {
    id: "gemini-3.0-flash",
    name: "Gemini 3.0 Flash",
    description: "Legacy flash baseline model",
  },
] as const;
