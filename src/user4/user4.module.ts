import { Module } from '@nestjs/common';
import { User4Service } from './user4.service';
import { User4Controller } from './user4.controller';
import { User4 } from './entities/user4.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User4])],
  controllers: [User4Controller],
  providers: [User4Service]
})
export class User4Module {}
