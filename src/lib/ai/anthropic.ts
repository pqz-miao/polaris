import { createAnthropic } from "@ai-sdk/anthropic";

export const anthropic = createAnthropic({
    baseURL: process.env.ANTHROPIC_BASE_URL!,
    apiKey: process.env.ANTHROPIC_API_KEY!,
});
