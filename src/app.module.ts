import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { PublicationsModule } from './publications/publications.module';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // TODO: migrate to env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      user: 'santi',
      password: '1603',
      database: 'library_database',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    PublicationsModule,
    AuthorsModule,
    UsersModule,
    FilesModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
