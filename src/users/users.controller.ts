/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Res, HttpStatus, Body, NotFoundException, Delete, Put, Param, Query} from '@nestjs/common';
import { CreateUsersDTO } from './dto/users.dto';

import { UserService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private userService: UserService){}
    @Post('/create') 
    
    async createPost(@Res() res, @Body() createUsersDTO: CreateUsersDTO){
        const cargo= await this.userService.createUser(createUsersDTO);
 
      
        return res.status(HttpStatus.OK).json({
            message: 'Cargo creado',
            cargo: cargo
        });
    }

    @Get('/')
    async getCargo(@Res() res){

        const cargo= await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({
            message: 'Users',
            user: cargo
        })
    }

    @Get('/cargo/:id') 
    async getCargoId(@Res() res, @Param('id') id: string){
        const cargo= await this.userService.getUser(id);
        if (!cargo) throw new NotFoundException('Cargo no encontrado');

        res.status(HttpStatus.OK).json({cargo})
    }
    @Delete('/delete/:id')
    async deleteCargo(@Res() res, @Param('id') id: string){
        const cargo= await this.userService.deleteUser(id);
        if (!cargo) throw new NotFoundException('Cargo no encontrado');

        res.status(HttpStatus.OK).json({
            message: 'Cargo eliminiado',
            CargoEliminado: cargo
        })
    }

    @Put('/update')
    async updateCargo(@Res() res, @Body() createUsersDTO: CreateUsersDTO, @Query('id') id){
        const cargo= await this.userService.updateUser(id, createUsersDTO);

        if (!cargo) throw new NotFoundException('Cargo no encontrado');

        res.status(HttpStatus.OK).json({
            message: 'Cargo actualizado',
            CargoActualizado: cargo
        })
    }
}




