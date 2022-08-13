import { Controller, FileTypeValidator, FileValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { renameImage } from '../helper/images.helper';
import { FilesService } from '../services/files.service';

@Controller('files')
export class FilesController {

    constructor(
        private readonly filesService: FilesService,
    ) { }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new FileTypeValidator({
                        fileType: /(pdf)$/
                    })
                ]
            })
        )
        @UploadedFile() file: Express.Multer.File
    ) {
        const s3Response= await this.filesService.uploadImage(file);
        
        return this.filesService.create(s3Response);
    }
}
