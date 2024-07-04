import { Test, TestingModule } from '@nestjs/testing';
import { KittensController } from './kittens.controller';
import { KittensService } from './kittens.service';

describe('KittensController', () => {
  let controller: KittensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KittensController],
      providers: [KittensService],
    }).compile();

    controller = module.get<KittensController>(KittensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
