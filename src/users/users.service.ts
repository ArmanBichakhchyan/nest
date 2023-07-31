import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './user.models';
import{ CreateUserDto} from './dto/create-user.dto'
import {RolsService} from '../rols/rols.service'
import { where } from 'sequelize';


@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private userRepository : typeof Users,
    private rolsService:RolsService) {}

    async createUser(dto:CreateUserDto){
        const user =await this.userRepository.create(dto)
        const role =await this.rolsService.getRoleByValue("USER")
        await user.$set("rols",[role])
        user.rols=[role]
        return user
    }

    async getUser(){
        const user =this.userRepository.findAll({include:{all:true}})
        return user
    }
    async getUserByEmail(email:string){
        const user = this.userRepository.findOne({where:{email},include:{all:true}})
        return user
    }
    
}
