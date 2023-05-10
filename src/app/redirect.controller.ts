import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { LinksService } from './links/links.service';

import { StatisticsService } from './statistics/statistics.service';

@Controller('/')
export class RedirectController {
  constructor(
    private readonly linksService: LinksService,
    private readonly statisticsService: StatisticsService,
  ) {}

  @Get('/:id')
  async redirect(
    @Param('id') id: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const link = await this.linksService.find(id);

    if (link) {
      await this.statisticsService.update(link.id, req);

      res.redirect(link.url);
    } else {
      res.status(404).send('Link not found');
    }
  }
}
