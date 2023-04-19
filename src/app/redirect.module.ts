import { Module } from '@nestjs/common';
import { RedirectController } from './redirect.controller';
import { RedirectService } from './redirect.service';

import { LinksController } from 'src/app/links/links.controller';
import { LinksModule } from './links/links.module';
import { LinksService } from './links/links.service';
import { StatisticsController } from './statistics/statistics.controller';
import { StatisticsModule } from './statistics/statistics.module';
import { StatisticsService } from './statistics/statistics.service';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { FirebaseService } from 'src/firebase/firebase.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LinksModule,
    StatisticsModule,
    FirebaseModule,
  ],
  controllers: [RedirectController, StatisticsController, LinksController],
  providers: [
    RedirectService,
    LinksService,
    StatisticsService,
    FirebaseService,
  ],
})
export class RedirectModule {
  constructor(private configService: ConfigService) {
    this.firebaseInitialize();
  }

  firebaseInitialize() {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: this.configService.get('FIREBASE_ADMIN_PROJECT_ID'),
        privateKey: this.configService
          .get('FIREBASE_ADMIN_PRIVATE_KEY')
          .replace(/\\n/g, '\n'),
        clientEmail: this.configService.get('FIREBASE_ADMIN_CLIENT_EMAIL'),
      }),
      databaseURL:
        'https://likeme-2b112-default-rtdb.europe-west1.firebasedatabase.app',
    });
  }
}
