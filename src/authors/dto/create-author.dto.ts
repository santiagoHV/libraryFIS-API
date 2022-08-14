import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthorDto{

    @ApiProperty({
        type: 'string',
        description: 'The id of the author'
    })
    @IsNumber()
    name: string

    @ApiProperty({
        type: 'string',
        description: 'The email of the author'
    })
    @IsString()
    email: string

    @ApiProperty({
        type: 'string',
        description: 'The phone of the author'
    })
    @IsString()
    phone: string

    @ApiProperty({
        type: 'boolean',
        description: 'is alive the author'
    })
    @IsNumber()
    alive: boolean

    @ApiProperty({
        type: 'string',
        description: 'The address of the author'
    })
    @IsString()
    address: string
    
}