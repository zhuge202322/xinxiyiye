/**
 * Create or reset the default admin user.
 *
 * Usage:
 *   node scripts/create-admin.mjs                         (default admin/admin123)
 *   node scripts/create-admin.mjs <username> <password>
 */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const username = process.argv[2] || 'admin';
const password = process.argv[3] || 'admin123';

async function main() {
  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.adminUser.upsert({
    where: { username },
    update: { passwordHash },
    create: { username, passwordHash },
  });
  console.log(`Admin ready:`);
  console.log(`  Username: ${username}`);
  console.log(`  Password: ${password}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
