import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { Author } from './entities/author.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Author])
    ],
    providers: [],
    controllers: []
})
export class AuthorsModule {}
