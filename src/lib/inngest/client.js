import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "PathWise",
  name: "PathWise",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff: 1s, 2s, 4s, etc.
    maxAttempts: 3, // Maximum of 5 retry attempts
  }),
});
