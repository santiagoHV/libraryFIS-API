import { 
    Body, 
    Controller, 
    Delete, 
    FileTypeValidator, 
    Get, 
    HttpCode, 
    HttpException, 
    HttpStatus, 
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
    ){}
    
    @Get()
    @Public()
    @HttpCode(HttpStatus.OK)
    getAll(){
        return this.publicationsService.findAll()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getOne(@Param('id') id: number){
        const res = await this.publicationsService.findOne(id)
    
        console.log('res')
        console.log(res)
        if(!res){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND)
        }
        return res
    }

    @Get('author/:id')
    @HttpCode(HttpStatus.OK)
    findByAuthor(@Param('id') id: number){
        return this.publicationsService.findByAuthor(id)
    }


    @Get('creator/:id')
    findByCreator(@Param('id') id: number){
        return this.publicationsService.findByCreator(id)
    }

    @Get('my-publications/all')
    @HttpCode(HttpStatus.OK)
    findMyPublications(@Req() req: Request){
        const user: any = req.user
        return this.publicationsService.findByCreator(user.sub)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
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
        const res = this.publicationsService.create(body, file, req.user)
        
        return res

    }

    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    update(@Param('id') id: number, @Body() body: CreatePublicationDto){
        return this.publicationsService.update(id, body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id: number){
        return this.publicationsService.delete(id)
    }
}
