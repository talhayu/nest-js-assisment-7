import { Test, TestingModule } from '@nestjs/testing';
import { User5Service } from './user5.service';

describe('User5Service', () => {
  let service: User5Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User5Service],
    }).compile();

    service = module.get<User5Service>(User5Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
