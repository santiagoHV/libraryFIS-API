import { 
    Body, 
    Controller, 
    Delete, 
    FileTypeValidator, 
    Get, 
    Param, 
    ParseFilePipe, 
    Post, 
    Put, 
    Req, 
    SetMetadata, 
    UploadedFile, 
    UseGuards, 
    UseInterceptors 
} from '@nestjs/common';
import { Request } from 'express';
import { PublicationsService } from '../services/publications.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from 'src/files/services/files.service';


@UseGuards(JwtAuthGuard)
@Controller('publications')
export class PublicationsController {

    constructor(
        private publicationsService: PublicationsService,
        private filesService: FilesService
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
    @UseInterceptors(FileInterceptor('file'))
    async create(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new FileTypeValidator({
                        fileType: /(pdf)$/
                    }) 
                ]
            })
        )
        file: Express.Multer.File,
        @Body() body: CreatePublicationDto,
        @Req() req: Request
    ){
        return this.publicationsService.create(body, file, req.user)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: CreatePublicationDto){
        return this.publicationsService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.publicationsService.delete(id)
    }
}
