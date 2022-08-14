import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthorsService } from '../services/authors.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('authors')
export class AuthorsController {

    constructor(
        private authorsService: AuthorsService
    ){}
    
    @Get()
    @Public()
    @HttpCode(HttpStatus.OK)
    getAll(){
        return this.authorsService.findAll()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    getOne(@Param('id') id: number){
        return this.authorsService.findOne(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: any){
        return this.authorsService.create(body)
    }

    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    update(@Param('id') id: number, @Body() body: any){
        return this.authorsService.update(id, body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id: number){
        return this.authorsService.delete(id)
    }
}