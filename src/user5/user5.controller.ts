import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User5Service } from './user5.service';
import { CreateUser5Dto } from './dto/create-user5.dto';
import { UpdateUser5Dto } from './dto/update-user5.dto';

@Controller('user5')
export class User5Controller {
  constructor(private readonly user5Service: User5Service) {}

  @Post()
  create(@Body() createUser5Dto: CreateUser5Dto) {
    return this.user5Service.create(createUser5Dto);
  }

  @Get()
  findAll() {
    return this.user5Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user5Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser5Dto: UpdateUser5Dto) {
    return this.user5Service.update(+id, updateUser5Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user5Service.remove(+id);
  }
}
