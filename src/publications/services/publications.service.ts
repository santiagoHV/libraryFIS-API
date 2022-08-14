import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Publication } from '../entities/publication.entity';
import { FilesService } from 'src/files/services/files.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class PublicationsService {

    constructor(
        @InjectRepository(Publication) private publicationRepo: Repository<Publication>,
        private filesService: FilesService,
        private usersService: UsersService

    ){}

    findAll(){
        return this.publicationRepo.find({
            relations: ['file','creator']
        })
    }

    findOne(id: number){
        return this.publicationRepo.findOne(id)
    }

    async create(body: CreatePublicationDto, file, user){
    
        console.log(user)
        const newPublication = this.publicationRepo.create(body)
        const creator = await this.usersService.findByEmail(user.email)

        newPublication.creator = creator
        
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
