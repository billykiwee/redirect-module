import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { LinksService } from './links.service';

@Controller('qlee.me-API=links')
export class LinksController {
  private startLoading = performance.now();

  constructor(private readonly linksService: LinksService) {}

  @Get()
  async read(@Query('id') id: string) {
    this.linksService.find(id);
  }

  @Post('create')
  @ApiOkResponse({ status: 201, description: 'Link a été créé' })
  create(@Body() data: any) {
    this.linksService.createLink(data);
  }

  @Delete()
  @ApiOkResponse({ status: 200, description: 'Link a été supprimé' })
  delete(@Query('id') id: string) {
    this.linksService.deleteLink(id);
  }
}
