import {ApiProperty} from "@nestjs/swagger" 
export class createRoleDto{
    @ApiProperty({example:"Admin",description:"rol"})
    readonly value:string;
    @ApiProperty({example:"",description:""})
    readonly description:string;
}