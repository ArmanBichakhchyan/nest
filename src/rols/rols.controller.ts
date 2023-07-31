import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolsService } from './rols.service';
import {createRoleDto}from './dto/creat-role.dto'

@Controller('rols')
export class RolsController {
    constructor(private rolsService:RolsService){}

    @Post()
    createRole(@Body()  dto:createRoleDto){
        return this.rolsService.createRole(dto)

    } 
    @Get('/:value')
     grtRoleByValue(@Param('value') value:string){
        return this.rolsService.getRoleByValue(value)
    }


}
