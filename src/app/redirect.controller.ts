import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { LinksService } from 'src/app/links/links.service';
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
    @Res() res: any,
    @Req() req: Request,
  ) {
    const getReferer = req.headers['referer'] || req.headers['referrer'];

    const referer = getReferer ? getReferer.toString() : '';

    const link = await this.linksService.find(id);

    if (link) {
      this.statisticsService.update(link.id, referer);

      res.redirect(link.url);
    }
  }
}
