import { Controller, Get, Param, Res } from '@nestjs/common';
import { LinksService } from 'src/app/links/links.service';
import { errorHandler } from 'src/handlers/error';

@Controller('/')
export class RedirectController {
  constructor(private readonly linksService: LinksService) {}

  @Get('/:id')
  redirect(@Param('id') id: string, @Res() res: any) {
    const link = this.linksService.find(id);

    if (link) {
      return res.redirect(link.url);
    } else {
      res.send(errorHandler(id).API_request.notFound);
    }
  }
}
