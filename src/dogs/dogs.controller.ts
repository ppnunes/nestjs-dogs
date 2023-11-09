import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  Query,
  Delete,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { DogsClass, Dog } from './interfaces/dogs.interface';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll(@Req() request: Request): string {
    return `This action returns all dogs to ${Object.entries(request.query)}\n`;
  }

  @Get('filter')
  findAllWithFilter(@Query('nome') nome: string): string {
    return `This action returns only dogs to nome=${nome}\n`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} dog\n`;
  }

  @Post()
  create(@Body() newDog: Dog): object {
    const max = 600000;
    return {
      message: 'This action adds a new dog',
      id: Math.floor(Math.random() * max),
      dog: newDog,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This action deletes the #${id} dog :( \n`;
  }
}
