import { Test, TestingModule } from '@nestjs/testing';
import { User5Controller } from './user5.controller';
import { User5Service } from './user5.service';

describe('User5Controller', () => {
  let controller: User5Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User5Controller],
      providers: [User5Service],
    }).compile();

    controller = module.get<User5Controller>(User5Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
