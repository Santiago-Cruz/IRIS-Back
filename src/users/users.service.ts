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

    async getUser(Id: string): Promise<User>{
        const user= await this.userModel.findOne({ Id: Id });
        return(user);
    }

    async createUser(createUserDTO: CreateUsersDTO): Promise<User>{
        const user= new this.userModel(createUserDTO);
        return await user.save();
    }
    async deleteUser(Id: string): Promise<User>{
        const user= await this.userModel.findById(Id);
        return user;
    }
    async updateUser(Id: string, createUserDTO: CreateUsersDTO): Promise<User> {
        const user= await this.userModel.findByIdAndUpdate(Id, createUserDTO, { new : true });
        return user;
    }

}
