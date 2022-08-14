import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber} from 'class-validator';

export class CreatePublicationDto{

    @ApiProperty({
        description: 'The title of the publication',
        type: 'string',
        required: true
    })
    @IsString()
    name: string

    @ApiProperty({
        description: 'The description of the publication',
        type: 'string',
        required: true
    })
    @IsString()
    description: string

    @ApiProperty({
        description: 'The author of the publication  (article, book or chapter)',
        type: 'string',
        required: true
    })
    @IsString()
    type: string

    @ApiProperty({
        description: 'File of the publication hosted in Amazon S3',
        type: 'string',
        required: false
    })
    @IsOptional()
    @IsNumber()
    fileId: number

    @ApiProperty({
        description: 'The id of the author',
        type: 'number',
        required: true
    })
    @IsOptional()
    @IsNumber()
    authorId: number
}