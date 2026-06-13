import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL || "admin@voima.org";
  const password = process.env.SEED_ADMIN_PASSWORD || "voima123";
  const name = process.env.SEED_ADMIN_NAME || "Voima Admin";

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.admin.upsert({
    where: { email },
    update: {},
    create: { name, email, passwordHash, role: "SUPER_ADMIN" },
  });

  await prisma.setting.upsert({
    where: { id: "site" },
    update: {},
    create: { id: "site", data: {} },
  });

  console.log(`✅ Seeded SUPER_ADMIN: ${email}`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());