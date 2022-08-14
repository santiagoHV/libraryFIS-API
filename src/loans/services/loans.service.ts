import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicationsService } from 'src/publications/services/publications.service';
import { UsersService } from 'src/users/services/users.service';
import { Repository } from 'typeorm';
import { Loan } from '../entities/loan.entity';

@Injectable()
export class LoansService {

    constructor(
        private usersService: UsersService,
        private publicationService: PublicationsService,
        @InjectRepository(Loan) private loanRepo: Repository<Loan>
    ){}

    findAll(){
        return this.loanRepo.find({
            relations: ['user', 'publication']
        })
    }

    async create(data, userData){
        const publication = await this.publicationService.findOne(data.publicationId)
        const user = await this.usersService.findByEmail(userData.email)

        const newLoan = this.loanRepo.create()
        newLoan.publication = publication
        newLoan.user = user

        return this.loanRepo.save(newLoan)
    }

    async returnBook(loanId){
        const loan = await this.loanRepo.findOne(loanId)
        loan.returned = true

        return this.loanRepo.save(loan)
    }

}
