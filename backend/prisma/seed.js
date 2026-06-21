import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

// Use the DIRECT (non-pooler) connection for one-shot scripts like seeding.
const prisma = new PrismaClient({
  datasources: {
    db: { url: process.env.DIRECT_URL || process.env.DATABASE_URL },
  },
});

async function main() {
  const name = process.env.SEED_ADMIN_NAME || "Emmanuel Dey";
  const email = process.env.SEED_ADMIN_EMAIL || "voimagh@gmail.com";
  const password = process.env.SEED_ADMIN_PASSWORD || "voimaIsAdminat26";
  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.upsert({
    where: { email },
    update: { name, passwordHash, role: "SUPER_ADMIN", isActive: true },
    create: { name, email, passwordHash, role: "SUPER_ADMIN" },
  });

  await prisma.setting.upsert({
    where: { id: "site" },
    update: {},
    create: { id: "site", data: {} },
  });

  console.log(`✅ Super Admin ready: ${admin.name} <${admin.email}>`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());