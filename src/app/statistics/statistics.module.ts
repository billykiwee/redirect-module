import { Module } from '@nestjs/common';
import { FirebaseService } from 'src/app/firebase/firebase.service';
import { LinksController } from '../links/links.controller';
import { LinksService } from '../links/links.service';
import { StatisticsService } from './statistics.service';

@Module({
  controllers: [LinksController],
  providers: [LinksService, StatisticsService, FirebaseService],
})
export class StatisticsModule {}
