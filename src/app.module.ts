import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { User1Module } from './user1/user1.module';
import { User1 } from './user1/entities/user1.entity';
import { User2Module } from './user2/user2.module';
import { User2 } from './user2/entities/user2.entity';
import { User3Module } from './user3/user3.module';
import { User3 } from './user3/entities/user3.entity';
import { User4Module } from './user4/user4.module';
import { User4 } from './user4/entities/user4.entity';
import { User5Module } from './user5/user5.module';
import { User5 } from './user5/entities/user5.entity';
import { User6Module } from './user6/user6.module';
import { User6 } from './user6/entities/user6.entity';


@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'assisment7',
      password: 'assisment7',
      database: 'assisment7',
      entities: [UserEntity, User1, User2, User3, User4, User5, User6],
      synchronize: true,
    }),
      UserModule,
      User1Module,
      User2Module,
      User3Module,
      User4Module,
      User5Module,
      User6Module
      
    
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
