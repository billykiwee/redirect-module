import { randomInt, randomUUID } from 'crypto';
import { StatisticsInt } from '../models/statistics.interface';

export const statisticsMock: StatisticsInt[] = [
  {
    uuid: randomUUID(),
    link: {
      id: 'cool',
      uuid: randomUUID(),
    },
    metrics: {
      views: randomInt(3),
      refs: ['facbok.com', 'instagram.com'],
      adresses: ['23488.393.439', '384.3932.39'],
    },
    updatedAt: new Date(),
  },
  {
    uuid: randomUUID(),
    link: {
      id: 'statsuper',
      uuid: randomUUID(),
    },
    metrics: {
      views: randomInt(3),
      refs: ['facbok.com', 'instagram.com'],
      adresses: ['23488.393.439', '384.3932.39'],
    },
    updatedAt: new Date(),
  },
];
