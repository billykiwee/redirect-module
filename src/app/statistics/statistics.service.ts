import { Injectable } from '@nestjs/common';

import { statisticsMock } from './mock/statistics.mock';
import { StatisticsInt } from './models/statistics.interface';

@Injectable()
export class StatisticsService {
  public statistics: StatisticsInt[] = statisticsMock;

  public find(id: string) {
    return this.statistics.find((stat) => stat.link.id === id);
  }

  public findAll() {
    return this.statistics;
  }

  public createLink(newStatistics: StatisticsInt) {
    return (this.statistics = [...this.statistics, newStatistics]);
  }
}
