import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Publication } from '../entities/publication.entity';
import { FilesService } from 'src/files/services/files.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';

@Injectable()
export class PublicationsService {

    constructor(
        @InjectRepository(Publication) private publicationRepo: Repository<Publication>,
        private filesService: FilesService
    ){}

    findAll(){
        return this.publicationRepo.find({
            relations: ['file']
        })
    }

    findOne(id: number){
        return this.publicationRepo.findOne(id)
    }

    async create(body: CreatePublicationDto, file){
    
        const newPublication = this.publicationRepo.create(body)
        console.log(typeof(newPublication))
        if(file){
            const newFile = await this.filesService.create(file)
            newPublication.file = newFile
        }
        return this.publicationRepo.save(newPublication)
    }

    async update(id: number, body: any){
        const publication = await this.publicationRepo.findOne(id)
        this.publicationRepo.merge(body)
        return this.publicationRepo.save(publication)
    }

    async delete(id: number){
        const publication = await this.publicationRepo.findOne(id)
        publication.archived = true
        return this.publicationRepo.save(publication)
    }
}
