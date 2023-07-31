import {ApiProperty} from "@nestjs/swagger" 
export class CreateUserDto{
    @ApiProperty({example:"mkdmj@mail.ru",description:"email"})
    readonly email:string;
    @ApiProperty({example:"begemont123.",description:"password"})
    readonly password:string;
}