import { Module } from '@nestjs/common';
import { User5Service } from './user5.service';
import { User5Controller } from './user5.controller';
import { User5 } from './entities/user5.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User5])],

  controllers: [User5Controller],
  providers: [User5Service]
})
export class User5Module {}
