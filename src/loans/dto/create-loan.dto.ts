import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLoanDto{

    @ApiProperty({
        type: 'number',
        description: 'The id of the publication'
    })
    @IsNumber()
    publicationId: number
}