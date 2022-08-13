import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { PublicationsService } from './services/publications.service';
import { PublicationsController } from './controllers/publications.controller';
import { Publication } from './entities/publication.entity';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publication]),
    FilesModule
  ],
  providers: [PublicationsService],
  controllers: [PublicationsController]
})
export class PublicationsModule {}
