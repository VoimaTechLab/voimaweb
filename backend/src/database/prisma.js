import { PrismaClient } from "@prisma/client";
import { env } from "../config/env.js";

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: env.isProd ? ["error"] : ["query", "warn", "error"],
  });

if (!env.isProd) globalForPrisma.prisma = prisma;