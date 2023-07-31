import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from "./users/user.models";
import { UsersModule } from './users/users.module';
import { RolsModule } from './rols/rols.module';
import { Rols } from "./rols/rols.models";
import { UserRols } from "./rols/user-rols.models";
import { AuthModule } from './auth/auth.module';


 

 @Module({
    controllers:[],//strx e harc@
    providers:[],//strx e harc@
    imports:[ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV}.env`}),
     SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password:process.env.POSTGRES_PASSWORD ,
        database:process.env.POSTGRES_DB ,
        models: [Users,Rols,UserRols],
        
        autoLoadModels:true,

      }), UsersModule, RolsModule, AuthModule, ]
 })

 export class AppModule{}