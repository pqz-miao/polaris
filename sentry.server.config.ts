import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://30c14cc4995ad0563eeb873d3b825412@o4509806960246784.ingest.us.sentry.io/4510729104850944",
  integrations: [
    // Add the Vercel AI SDK integration to sentry.server.config.ts
    Sentry.vercelAIIntegration({
      recordInputs: true,
      recordOutputs: true,
    }),
    // send console.log, console.warn, and console.error calls as logs to Sentry
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],
  // Adds request headers and IP for users
  sendDefaultPii: true,
  // Capture 100% in dev, 10% in production
  // Adjust based on your traffic volume
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
  // Enable logs to be sent to Sentry
  enableLogs: true,
});
