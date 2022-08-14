import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { PublicationsService } from './services/publications.service';
import { PublicationsController } from './controllers/publications.controller';
import { Publication } from './entities/publication.entity';
import { FilesModule } from 'src/files/files.module';
import { UsersModule } from 'src/users/users.module';
import { AuthorsModule } from 'src/authors/authors.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publication]),
    FilesModule,
    UsersModule,
    AuthorsModule
  ],
  providers: [PublicationsService],
  controllers: [PublicationsController],
  exports: [PublicationsService]
})
export class PublicationsModule {}
