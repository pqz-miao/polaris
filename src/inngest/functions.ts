import { generateText } from "ai";

import { anthropic } from "@/lib/ai/anthropic";

import { inngest } from "./client";

export const demoGenerate = inngest.createFunction(
  { id: "demo-generate" },
  { event: "demo/generate" },
  async ({ step }) => {
    await step.run("generate-text", async () => {
        return await generateText({
            model: anthropic("claude-3-5-haiku-20241022"),
            prompt: "Write a vegetarian lasagna recipe for 4 people.",
        });
    });
  },
);
