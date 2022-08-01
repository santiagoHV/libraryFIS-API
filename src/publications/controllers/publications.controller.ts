import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { PublicationsService } from '../services/publications.service';

@Controller('publications')
export class PublicationsController {

    constructor(
        private publicationsService: PublicationsService
    ){}
    
    @Get()
    getAll(){
        return this.publicationsService.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.publicationsService.findOne(id)
    }

    @Post()
    create(@Body() body: any){
        return this.create(body)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: any){
        return this.publicationsService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.publicationsService.delete(id)
    }
}
