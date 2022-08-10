import { Body, Controller, Delete, Get, Param, Post, Put, SetMetadata, UseGuards } from '@nestjs/common';
import { PublicationsService } from '../services/publications.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('publications')
export class PublicationsController {

    constructor(
        private publicationsService: PublicationsService
    ){}
    
    @Get()
    @Public()
    getAll(){
        return this.publicationsService.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.publicationsService.findOne(id)
    }

    @Post()
    create(@Body() body: any){
        return this.publicationsService.create(body)
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
