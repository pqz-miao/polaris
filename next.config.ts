import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  // Your existing Next.js configuration
};

export default withSentryConfig(nextConfig, {
  org: "pangqingzhu",
  project: "polaris",
  // Pass the auth token
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // Upload a larger set of source maps for prettier stack traces
  widenClientFileUpload: true,
  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,
});
