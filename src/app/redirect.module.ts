import { Module } from '@nestjs/common';
import { RedirectController } from './redirect.controller';

import { StatisticsController } from './statistics/statistics.controller';
import { StatisticsModule } from './statistics/statistics.module';
import { StatisticsService } from './statistics/statistics.service';
import { FirebaseModule } from 'src/app/firebase/firebase.module';
import { FirebaseService } from 'src/app/firebase/firebase.service';
import { initializeFirebase } from './firebase/firebase.config';
import { LinksModule } from './links/links.module';
import { LinksService } from './links/links.service';
import { LinksController } from './links/links.controller';

@Module({
  imports: [LinksModule, StatisticsModule, FirebaseModule],
  controllers: [RedirectController, StatisticsController, LinksController],
  providers: [LinksService, StatisticsService, FirebaseService],
})
export class RedirectModule {
  constructor() {
    initializeFirebase();
  }
}
