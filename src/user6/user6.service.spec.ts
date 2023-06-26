import { Test, TestingModule } from '@nestjs/testing';
import { User6Service } from './user6.service';

describe('User6Service', () => {
  let service: User6Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User6Service],
    }).compile();

    service = module.get<User6Service>(User6Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
