import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { CreateLoanDto } from '../dto/create-loan.dto';
import { LoansService } from '../services/loans.service';

@UseGuards(JwtAuthGuard)
@Controller('loans')
export class LoansController {

    constructor(
        private loansService: LoansService
    ){}

    @Get()
    @Public()
    getAll(){
        return this.loansService.findAll()
    }

    @Post()
    create(
        @Body() body: CreateLoanDto,
        @Req() req: Request
    ){
        return this.loansService.create(body, req.user)
    }

    @Put('return/:id')
    return(@Param(':id') id: number){
        return this.loansService.returnBook(id)
    }
}
