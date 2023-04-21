import { Module } from '@nestjs/common';
import { RedirectController } from './redirect.controller';
import { RedirectService } from './redirect.service';

import { LinksController } from 'src/app/links/links.controller';
import { LinksModule } from './links/links.module';
import { LinksService } from './links/links.service';
import { StatisticsController } from './statistics/statistics.controller';
import { StatisticsModule } from './statistics/statistics.module';
import { StatisticsService } from './statistics/statistics.service';
import { FirebaseModule } from 'src/app/firebase/firebase.module';
import { FirebaseService } from 'src/app/firebase/firebase.service';
import { initializeFirebase } from './firebase/firebase.config';

@Module({
  imports: [LinksModule, StatisticsModule, FirebaseModule],
  controllers: [RedirectController, StatisticsController, LinksController],
  providers: [
    RedirectService,
    LinksService,
    StatisticsService,
    FirebaseService,
  ],
})
export class RedirectModule {
  constructor() {
    initializeFirebase();
  }
}
