import { Test, TestingModule } from '@nestjs/testing';
import { User6Controller } from './user6.controller';
import { User6Service } from './user6.service';

describe('User6Controller', () => {
  let controller: User6Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User6Controller],
      providers: [User6Service],
    }).compile();

    controller = module.get<User6Controller>(User6Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
