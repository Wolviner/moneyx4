import arcjet, { slidingWindow } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    slidingWindow({
      mode: "LIVE",
      interval: 60,
      max: 2,
    }),
  ],
});

export default aj;
