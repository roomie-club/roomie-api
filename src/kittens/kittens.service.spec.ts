import { Test, TestingModule } from '@nestjs/testing';
import { KittensService } from './kittens.service';

describe('KittensService', () => {
  let service: KittensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KittensService],
    }).compile();

    service = module.get<KittensService>(KittensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
