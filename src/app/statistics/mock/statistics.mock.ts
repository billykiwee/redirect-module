import { randomInt, randomUUID } from 'crypto';
import { StatisticsInt } from '../models/statistics.interface';

export const statisticsMock: StatisticsInt[] = [
  {
    uuid: randomUUID(),
    link: {
      id: 'cool',
      uuid: randomUUID(),
    },
    views: randomInt(3),
    updatedAt: new Date(),
  },
];
