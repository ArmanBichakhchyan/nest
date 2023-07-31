import { ApiProperty } from "@nestjs/swagger";
import { Column, Table,DataType,Model, BelongsToMany, } from "sequelize-typescript";
import { Users } from "../users/user.models";
import {UserRols} from "./user-rols.models"

interface RolsCreationAttrs{
    value:string;
    description:string;
}
 @Table({tableName:'rols'})
export class Rols extends Model<Rols,RolsCreationAttrs>{
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    @ApiProperty({example:1,description:"unick"})
    id:Number;

    @Column({type:DataType.STRING,unique:true,allowNull:false})
    @ApiProperty({example:"Admin",description:"roli"})
    value:string;

    @Column({type:DataType.STRING,allowNull:false})
    @ApiProperty({example:"odministrator.",description:"o roli"})
    description:string;
    

    @BelongsToMany(()=>Users,()=>UserRols)
    users:Users[]
     role: string | number | Model<any, any>;

    
}