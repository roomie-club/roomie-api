import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KittensService } from './kittens.service';
import { CreateKittenDto } from './dto/create-kitten.dto';
import { UpdateKittenDto } from './dto/update-kitten.dto';

@Controller('kittens')
export class KittensController {
  constructor(private readonly kittensService: KittensService) {}

  @Post()
  create(@Body() createKittenDto: CreateKittenDto) {
    return this.kittensService.create(createKittenDto);
  }

  @Get()
  findAll() {
    return this.kittensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kittensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKittenDto: UpdateKittenDto) {
    return this.kittensService.update(+id, updateKittenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kittensService.remove(+id);
  }
}
