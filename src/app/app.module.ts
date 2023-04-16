import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksService } from '../links/links.service';
import { LinksModule } from '../links/links.module';
import { StatisticsController } from '../statistics/statistics.controller';
import { StatisticsService } from '../statistics/statistics.service';
import { StatisticsModule } from '../statistics/statistics.module';

@Module({
  imports: [LinksModule, StatisticsModule],
  controllers: [AppController, StatisticsController],
  providers: [AppService, LinksService, StatisticsService],
})
export class AppModule {}
