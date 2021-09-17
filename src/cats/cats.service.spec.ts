import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';

// CLI service generation command $ nest g service cats

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
