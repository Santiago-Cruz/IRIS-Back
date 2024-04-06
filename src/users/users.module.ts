/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'User', schema: UserSchema}
    ])
  ],
  controllers: [UsersController],
  providers: [UserService]
})
export class UsersModule {}
