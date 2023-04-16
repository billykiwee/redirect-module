import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get('qlee.me-API')
  readAll(@Param('id') id: string) {
    if (id === 'api-qlee.me') console.log('oui');
    return this.linksService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    this.linksService.createLink(data);
  }
}
