import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dtos/user.dto";
import { User } from "../entities/user.entity";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ) {}

    findAll(){
        return this.userRepo.find()
    }

    findByEmail(email: string){
        return this.userRepo.findOne({where: { email }})
    }

    async create(data: CreateUserDto){
        const newUser = this.userRepo.create(data)
        const hashPassword = await bcrypt.hash(newUser.password, 10)
        newUser.password = hashPassword
        return await this.userRepo.save(newUser)
    }

    async update(id: number, data: CreateUserDto){
        const user = await this.userRepo.findOne(id)
        if(!user) throw new Error('User not found')
        this.userRepo.merge(user, data)
        return await this.userRepo.save(user)
    }
}