import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { env } from "../config/env.js";

const globalForPrisma = globalThis;

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: env.isProd ? ["error"] : ["query", "warn", "error"],
  });

if (!env.isProd) {
  globalForPrisma.prisma = prisma;
}