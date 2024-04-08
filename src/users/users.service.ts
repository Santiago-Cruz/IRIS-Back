/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/users.interface';
import { CreateUsersDTO } from './dto/users.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async getUsers(): Promise<User[]> {
        const users= await this.userModel.find();
        return users;
    }

    async getUser(_id: string): Promise<User>{
        const user= await this.userModel.findById( _id );
        return(user);
    }

    async createUser(createUserDTO: CreateUsersDTO): Promise<User>{
        const user= new this.userModel(createUserDTO);
        return await user.save();
    }
    async deleteUser(_id: string): Promise<User>{
        const user= await this.userModel.findByIdAndDelete( _id );
        return user;
    }
    async updateUser(_id: string, createUserDTO: CreateUsersDTO): Promise<User> {
        const user= await this.userModel.findOneAndUpdate({Id: _id}, createUserDTO, { new : true });
        return user;
    }

}
