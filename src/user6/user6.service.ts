import { Injectable } from '@nestjs/common';
import { CreateUser6Dto } from './dto/create-user6.dto';
import { UpdateUser6Dto } from './dto/update-user6.dto';

@Injectable()
export class User6Service {
  create(createUser6Dto: CreateUser6Dto) {
    return 'This action adds a new user6';
  }

  findAll() {
    return `This action returns all user6`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user6`;
  }

  update(id: number, updateUser6Dto: UpdateUser6Dto) {
    return `This action updates a #${id} user6`;
  }

  remove(id: number) {
    return `This action removes a #${id} user6`;
  }
}
