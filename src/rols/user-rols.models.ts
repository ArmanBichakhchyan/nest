import { ApiProperty } from "@nestjs/swagger";
import { Column, Table,DataType,Model, BelongsToMany, ForeignKey } from "sequelize-typescript";
import { Users } from "../users/user.models";
import { Rols } from "./rols.models";

 @Table({tableName:'user_rols',createdAt:false,updatedAt:false})
export class UserRols extends Model<UserRols>{
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:Number;

    @ForeignKey(()=>Rols)
    @Column({type:DataType.INTEGER})
    roleId:number;

    @ForeignKey(()=>Users)
    @Column({type:DataType.INTEGER})
    userId:number;
    

   

    
}