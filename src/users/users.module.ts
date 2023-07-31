import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './user.models';
import { Rols } from '../rols/rols.models';
import {UserRols}from '../rols/user-rols.models'
import { RolsModule } from '../rols/rols.module';
import { AuthModule } from '../auth/auth.module';



@Module({
  controllers:[UsersController],
  providers: [UsersService],
  imports:[ 
    SequelizeModule.forFeature([Users,Rols,UserRols]),
    RolsModule,
    forwardRef(()=>AuthModule)
  ],
  exports:[UsersService,AuthModule]
})

export class UsersModule {}
