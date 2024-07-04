import { Module } from '@nestjs/common';
import { KittensService } from './kittens.service';
import { KittensController } from './kittens.controller';

@Module({
  controllers: [KittensController],
  providers: [KittensService],
})
export class KittensModule {}
