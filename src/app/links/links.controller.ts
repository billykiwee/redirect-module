import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { LinksService } from './links.service';

@Controller('qlee.me-API=links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get('read')
  read(@Query('id') id: string) {
    if (id) {
      return (
        this.linksService.find(id) ??
        new NotFoundException(`No data found for id: ${id}`)
      );
    }

    return this.linksService.findAll();
  }

  @Post('create')
  @ApiOkResponse({ status: 201, description: 'Link à été crée' })
  create(@Body() data: any) {
    this.linksService.createLink(data);
  }

  @Delete('delete')
  deleteL(@Query('id') id: string) {
    this.linksService.deleteLink(id);
  }
}
