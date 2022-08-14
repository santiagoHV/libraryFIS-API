import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as AWS from 'aws-sdk';
import { Repository } from 'typeorm';

import { File } from '../entities/file.entity';

@Injectable()
export class FilesService {

    constructor(
        @InjectRepository(File) private fileRepository: Repository<File>,
    ) { 
        console.log('env')
        console.log(process.env.AWS_S3_BUCKET)
    }

    private awsBucket = process.env.AWS_S3_BUCKET
    private s3 = new AWS.S3({
        region: process.env.AWS_S3_REGION,
        accessKeyId: process.env.AWS_S3_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    })

    async create(file) {
        const s3Response= await this.uploadImage(file);
        const newfile = await this.fileRepository.create()
        
        newfile.documentLink = s3Response.Location
        newfile.documentName = s3Response.Key
        console.log(newfile)
        return this.fileRepository.save(newfile)
    
    }

    async uploadImage(file) {
        const { originalname } = file;
        return await this.s3Upload(
            file.buffer,
            this.awsBucket,
            originalname,
            file.mimetype,
        );
    }

    private async s3Upload(file, bucket, name, mimetype) {
        const params = {
            Bucket: bucket,
            Key: String(name),
            Body: file,
            ContentType: mimetype,
            ContentDisposition: 'inline',
        };
        try {
            let s3Response = await this.s3.upload(params).promise();
            return s3Response;
        } catch (e) {
            console.log(e);
        }
    }

    

}
