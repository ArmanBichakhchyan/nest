import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolsService } from './rols.service';
import { RolsController } from './rols.controller';
import { Rols } from './rols.models';
import { Users } from '../users/user.models';
import {UserRols} from './user-rols.models'

@Module({
  providers: [RolsService],
  controllers: [RolsController],
  imports:[ 
    SequelizeModule.forFeature([Rols,Users,UserRols]) 
  ],
  exports:[RolsService]

})
export class RolsModule {}
