import { ApiProperty } from "@nestjs/swagger";
import { Column, Table,DataType,Model, BelongsToMany, } from "sequelize-typescript";
import { Rols } from "../rols/rols.models";
import {UserRols} from '../rols/user-rols.models'

interface UserCreationAttrs{
    email:string;
    password:string;
}
 @Table({tableName:'users'})
export class Users extends Model<Users,UserCreationAttrs>{
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    @ApiProperty({example:1,description:"unick"})
    id:Number;
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    @ApiProperty({example:"bicho@gmial.ru",description:"email"})
    email:string;
    @Column({type:DataType.STRING,allowNull:false})
    @ApiProperty({example:"begemont123.",description:"password"})
    password:string;
    @Column({type:DataType.BOOLEAN,defaultValue:false})
    @ApiProperty({example:"true",description:"valid"})
    banned:boolean;
    @Column({type:DataType.BOOLEAN,allowNull:true})
    @ApiProperty({example:"true",description:"noValid"})
    banReason:string;

    @BelongsToMany(()=>Rols,()=>UserRols)
    rols:Rols[]
}