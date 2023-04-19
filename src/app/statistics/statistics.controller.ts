import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('qlee.me-API=statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  /* @Get('read')
  read(@Query('id') id: string) {
    if (id) {
      return this.statisticsService.find(id);
    }

    return this.statisticsService.findAll();
  }

  @Post('create')
  create(@Body() data: any) {
    this.statisticsService.createLink(data);
  } */
}
