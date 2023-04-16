import { Controller, Get, Param, Res } from '@nestjs/common';
import { LinksService } from 'src/links/links.service';

@Controller()
export class AppController {
  constructor(private readonly linksService: LinksService) {}

  @Get('/:id')
  read(@Param('id') id: string /* @Res() res: any */) {
    // const url = this.linksService.find(id).url;

    return this.linksService.find(id);
    //return res.redirect(`https://${url}`);
  }
}
