import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{


    @ApiProperty({
        description: 'The name of the user',
        type: 'string',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'The lastname of the user',
        type: 'string',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty({
        description: 'The email of the user',
        type: 'string',
        required: true
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        type: 'string',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}