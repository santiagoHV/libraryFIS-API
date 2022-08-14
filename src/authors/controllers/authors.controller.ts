import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
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
    getAll(){
        return this.authorsService.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.authorsService.findOne(id)
    }

    @Post()
    create(@Body() body: any){
        return this.authorsService.create(body)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: any){
        return this.authorsService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.authorsService.delete(id)
    }
}