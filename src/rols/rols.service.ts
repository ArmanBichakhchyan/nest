import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import{ createRoleDto} from './dto/creat-role.dto'
import { Rols } from './rols.models';

@Injectable()
export class RolsService { 
    constructor(@InjectModel(Rols) private roleRepository : typeof Rols) {}

    async createRole(dto:createRoleDto){
        const role =await this.roleRepository.create(dto)
        return role

    }
    async getRoleByValue(value:string){
        const role =await this.roleRepository.findOne({where:{value}})
        return role
    }
}
