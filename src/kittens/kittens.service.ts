import { Injectable } from '@nestjs/common';
import { CreateKittenDto } from './dto/create-kitten.dto';
import { UpdateKittenDto } from './dto/update-kitten.dto';

@Injectable()
export class KittensService {
  create(createKittenDto: CreateKittenDto) {
    return 'This action adds a new kitten';
  }

  findAll() {
    return `This action returns all kittens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kitten`;
  }

  update(id: number, updateKittenDto: UpdateKittenDto) {
    return `This action updates a #${id} kitten`;
  }

  remove(id: number) {
    return `This action removes a #${id} kitten`;
  }
}
