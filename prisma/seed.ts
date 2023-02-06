import { db } from '../lib/db';
import { getShortenedUrl } from '../lib/getShortenedUrl';

async function main() {
  const user = await db.user.upsert({
    where: { email: 'dom@gmail.com' },
    update: {},
    create: {
      email: 'dom@gmail.com',
      password: 'pword',
      firstName: 'Dom',
      urls: {
        create: {
          original: 'https://nomad.app',
          shortened: await getShortenedUrl('https://nomad.app'),
        },
      },
    },
  });
  console.log('user', user);
}

main()
  .then(async () => await db.$disconnect)
  .catch(async e => {
    console.error(e);
    await db.$disconnect;
    process.exit(1);
  });
