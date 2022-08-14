import {IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber} from 'class-validator';

export class CreatePublicationDto{
    @IsString()
    name: string

    @IsString()
    description: string

    @IsString()
    type: string

    @IsOptional()
    @IsNumber()
    fileId: number

    @IsOptional()
    @IsNumber()
    authorId: number
}