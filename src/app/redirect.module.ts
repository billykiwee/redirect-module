import { Module } from '@nestjs/common';
import { RedirectController } from './redirect.controller';
import { AppService } from './redirect.service';

import { LinksController } from 'src/app/links/links.controller';
import { LinksModule } from './links/links.module';
import { LinksService } from './links/links.service';
import { StatisticsController } from './statistics/statistics.controller';
import { StatisticsModule } from './statistics/statistics.module';
import { StatisticsService } from './statistics/statistics.service';

@Module({
  imports: [LinksModule, StatisticsModule],
  controllers: [RedirectController, StatisticsController, LinksController],
  providers: [AppService, LinksService, StatisticsService],
})
export class RedirectModule {}
