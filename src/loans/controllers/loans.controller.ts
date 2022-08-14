import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
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
    @HttpCode(HttpStatus.OK)
    @Public()
    getAll(){
        return this.loansService.findAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(
        @Body() body: CreateLoanDto,
        @Req() req: Request
    ){
        const res = await this.loansService.create(body, req.user)
        
        return res
    }

    @HttpCode(HttpStatus.CREATED)
    @Put('return/:id')
    return(@Param(':id') id: number){
        const res = this.loansService.returnBook(id)
        if(!res){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND)
        }

        return res
    }
}
