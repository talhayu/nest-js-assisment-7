import { Module } from '@nestjs/common';
import { User6Service } from './user6.service';
import { User6Controller } from './user6.controller';
import { User6 } from './entities/user6.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User6])],

  controllers: [User6Controller],
  providers: [User6Service]
})
export class User6Module {}
