import { Module } from '@nestjs/common';
import { FirebaseService } from 'src/firebase/firebase.service';
import { StatisticsService } from '../statistics/statistics.service';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';

@Module({
  controllers: [LinksController],
  providers: [LinksService, StatisticsService, FirebaseService],
})
export class LinksModule {}
