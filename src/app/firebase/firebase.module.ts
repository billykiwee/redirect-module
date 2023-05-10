import { Module } from '@nestjs/common';
import { LinksService } from '../links/links.service';

import { StatisticsService } from '../statistics/statistics.service';
import { FirebaseService } from './firebase.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FirebaseService, LinksService, StatisticsService],
})
export class FirebaseModule {}
