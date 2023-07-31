 import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthguard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './user.models';
import { UsersService } from './users.service';


@Controller('Users')
@ApiTags('users')
export class UsersController {
    constructor(private usersService:UsersService){}
   @ApiOperation({summary:'create user'})
   @ApiResponse({status:200,type:Users}) 
   @Post()
   create(@Body() userDto:CreateUserDto){
    return this.usersService.createUser(userDto)
   }

   @ApiOperation({summary:'info user'})
   @ApiResponse({status:200,type:Users})
   @Get()
   @UseGuards(JwtAuthguard)
   getUsers(){
    return this.usersService.getUser()
   }
}
