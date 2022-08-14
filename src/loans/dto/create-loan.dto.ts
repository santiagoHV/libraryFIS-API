import { IsNumber, IsString } from "class-validator";

export class CreateLoanDto{

    @IsNumber()
    publicationId: number
}