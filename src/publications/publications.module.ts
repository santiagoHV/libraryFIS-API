import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { PublicationsService } from './services/publications.service';
import { PublicationsController } from './controllers/publications.controller';
import { Publication } from './entities/publication.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publication])
  ],
  providers: [PublicationsService],
  controllers: [PublicationsController]
})
export class PublicationsModule {}
