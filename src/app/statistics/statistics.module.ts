import { Module } from '@nestjs/common';
import { LinksController } from '../links/links.controller';
import { LinksService } from '../links/links.service';

@Module({
  controllers: [LinksController],
  providers: [LinksService],
})
export class StatisticsModule {}
