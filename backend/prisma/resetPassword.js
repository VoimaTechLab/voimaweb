import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DIRECT_URL || process.env.DATABASE_URL } },
});

const email = process.argv[2];
const password = process.argv[3];

async function run() {
  if (!email || !password) {
    console.error("Usage: node prisma/resetPassword.js <email> <password>");
    process.exit(1);
  }
  const passwordHash = await bcrypt.hash(password, 12);
  const admin = await prisma.admin.update({
    where: { email },
    data: { passwordHash, isActive: true, role: "SUPER_ADMIN" },
  });
  const verify = await bcrypt.compare(password, admin.passwordHash);
  console.log(`✅ Updated ${admin.email} | compare = ${verify}`);
}

run()
  .catch((e) => {
    if (e.code === "P2025") console.error("❌ No admin with that email — check the email exactly.");
    else console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());