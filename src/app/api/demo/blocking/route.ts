import { generateText } from "ai";

import { anthropic } from "@/lib/ai/anthropic";

export async function POST() {
    const response = await generateText({
        model: anthropic("claude-3-5-haiku-20241022"),
        prompt: "Write a vegetarian lasagna recipe for 4 people.",
        experimental_telemetry: {
            isEnabled: true,
            recordInputs: true,
            recordOutputs: true,
        },
    });

    return Response.json({ response });
};
