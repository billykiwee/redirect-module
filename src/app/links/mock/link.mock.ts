import { randomUUID } from 'crypto';
import { LinksInt } from '../models/links.interface';

export const linksMock: LinksInt[] = [
  {
    id: 'cool',
    uuid: randomUUID(),
    url: 'https://www.youtube.fr',
    shortLink: 'qlee.me/cool',
    user: {
      uuid: randomUUID(),
    },
    statistics: {
      uuid: randomUUID(),
    },
    createdAt: new Date(),
  },
  {
    id: 'statsuper',
    uuid: randomUUID(),
    url: 'https://www.youtube.fr',
    shortLink: 'qlee.me/cool',
    user: {
      uuid: randomUUID(),
    },
    statistics: {
      uuid: randomUUID(),
    },
    createdAt: new Date(),
  },
];
