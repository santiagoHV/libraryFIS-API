import { Body, Controller, Delete, Get, Param, Post, Put, SetMetadata, UseGuards } from '@nestjs/common';
import { identity } from 'rxjs';
import { PublicationsService } from '../services/publications.service';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { Public } from 'src/auth/decorators/public.decorator';


@UseGuards(ApiKeyGuard)
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
