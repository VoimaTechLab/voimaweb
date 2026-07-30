import app from "./src/app.js";
import { env } from "./src/config/env.js";
import { prisma } from "./src/database/prisma.js";

const server = app.listen(env.port, () => {
  console.log(`🚀 Voima API running on :${env.port}${env.apiPrefix}`);
});

const shutdown = async (signal) => {
  console.log(`\n${signal} received. Closing gracefully...`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
};
["SIGINT", "SIGTERM"].forEach((s) => process.on(s, () => shutdown(s)));