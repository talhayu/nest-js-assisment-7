import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User6Service } from './user6.service';
import { CreateUser6Dto } from './dto/create-user6.dto';
import { UpdateUser6Dto } from './dto/update-user6.dto';

@Controller('user6')
export class User6Controller {
  constructor(private readonly user6Service: User6Service) {}

  @Post()
  create(@Body() createUser6Dto: CreateUser6Dto) {
    return this.user6Service.create(createUser6Dto);
  }

  @Get()
  findAll() {
    return this.user6Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user6Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser6Dto: UpdateUser6Dto) {
    return this.user6Service.update(+id, updateUser6Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user6Service.remove(+id);
  }
}
