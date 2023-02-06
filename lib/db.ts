import { PrismaClient } from '@prisma/client';

/*
Because Next API functions run in a serveless environment,
we're going to cache our Prisma client and reuse it when possible
to avoid having too many connections.
*/

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
