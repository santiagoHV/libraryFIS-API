import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "../dtos/user.dto";
import { UsersService } from "../services/users.service";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get()
    findAll(){
        return this.usersService.findAll()
    }

    @Post()
    create(@Body() payload: CreateUserDto){
        return this.usersService.create(payload)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: CreateUserDto){
        return this.usersService.update(id, payload)
    }
}