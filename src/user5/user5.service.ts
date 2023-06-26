import { Injectable } from '@nestjs/common';
import { CreateUser5Dto } from './dto/create-user5.dto';
import { UpdateUser5Dto } from './dto/update-user5.dto';

@Injectable()
export class User5Service {
  create(createUser5Dto: CreateUser5Dto) {
    return 'This action adds a new user5';
  }

  findAll() {
    return `This action returns all user5`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user5`;
  }

  update(id: number, updateUser5Dto: UpdateUser5Dto) {
    return `This action updates a #${id} user5`;
  }

  remove(id: number) {
    return `This action removes a #${id} user5`;
  }
}
