import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Author } from '../entities/author.entity';

@Injectable()
export class AuthorsService {

    constructor(
        @InjectRepository(Author) private authorRepo: Repository<Author>
    ){}

    findAll(){
        return this.authorRepo.find()
    }

    findOne(id: number){
        return this.authorRepo.findOne(id)
    }

    create(body: any){
        const newAuthor = this.authorRepo.create(body)
        return this.authorRepo.save(newAuthor)
    }

    async update(id: number, body: any){
        const author = await this.authorRepo.findOne(id)
        this.authorRepo.merge(body)
        return this.authorRepo.save(author)
    }

    async delete(id: number){
        const author = await this.authorRepo.findOne(id)
        author.alive = true
        return this.authorRepo.save(author)
    }
}