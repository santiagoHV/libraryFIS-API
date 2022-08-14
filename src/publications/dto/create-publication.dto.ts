import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber} from 'class-validator';

export class CreatePublicationDto{

    @ApiProperty({
        description: 'The title of the publication',
        type: 'string',
    })
    @IsString()
    @IsOptional()
    name: string

    @ApiProperty({
        description: 'The description of the publication',
        type: 'string',
    })
    @IsString()
    @IsOptional()
    description: string

    @ApiProperty({
        description: 'The author of the publication  (article, book or chapter)',
        type: 'string',
        required: false
    })
    @IsString()
    @IsOptional()
    type: string

    @ApiProperty({
        type: 'boolean',
    })
    @IsBoolean()
    @IsOptional()
    inPhysical: boolean

    @ApiProperty({
        description: 'File of the publication hosted in Amazon S3',
        type: 'string',
    })
    @IsOptional()
    @IsNumber()
    fileId: number

    @ApiProperty({
        description: 'SSN of the publication',
        type: 'string',
    })
    @IsOptional()
    @IsString()
    idSSN: string

    @ApiProperty({
        description: 'ISBN of the publication',
        type: 'string',
    })
    @IsOptional()
    @IsString()
    idISBN: string

    @ApiProperty({
        description: 'Stock of the publication',
    })
    @IsOptional()
    @IsNumber()
    stock: number

    @ApiProperty({
        description: 'The id of the author',
        type: 'number',
    })
    @IsOptional()
    @IsNumber()
    authorId: number
}