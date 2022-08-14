import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { Author } from './entities/author.entity';
import { AuthorsController } from './controllers/authors.controller';
import { AuthorsService } from './services/authors.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Author])
    ],
    providers: [AuthorsService],
    controllers: [AuthorsController]
})
export class AuthorsModule {}
