import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { PublicationsService } from './services/publications.service';
import { PublicationsController } from './controllers/publications.controller';
import { Publication } from './entities/publication.entity';
import { FilesModule } from 'src/files/files.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publication]),
    FilesModule,
    UsersModule
  ],
  providers: [PublicationsService],
  controllers: [PublicationsController],
  exports: [PublicationsService]
})
export class PublicationsModule {}
