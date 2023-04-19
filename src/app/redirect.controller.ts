import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { LinksService } from 'src/app/links/links.service';
import { FirebaseService } from 'src/firebase/firebase.service';
import { StatisticsService } from './statistics/statistics.service';

@Controller('/')
export class RedirectController {
  constructor(
    private readonly linksService: LinksService,
    private readonly statisticsService: StatisticsService,
    private readonly firebaseService: FirebaseService,
  ) {}

  @Get('/:id')
  async redirect(
    @Param('id') id: string,
    @Res() res: any,
    @Req() req: Request,
  ) {
    const link = this.firebaseService.collections('links')?.doc(id);

    const getReferer = req.headers['referer'] || req.headers['referrer'];

    const referer = getReferer ? getReferer.toString() : '';

    this.linksService.find(id);

    this.statisticsService.update(link?.id, referer);

    /*  if (link) {
      return res.redirect(link.url);
    } else {
      res.send(errorHandler(id).API_request.notFound);
    } */
  }
}
