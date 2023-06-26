import { Module } from '@nestjs/common';
import { User2Service } from './user2.service';
import { User2Controller } from './user2.controller';
import { User2 } from './entities/user2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User2])],

  controllers: [User2Controller],
  providers: [User2Service]
})
export class User2Module {}
