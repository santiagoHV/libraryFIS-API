import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';
import { PublicationsModule } from './publications/publications.module';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PublicationsModule,
    AuthorsModule,
    UsersModule,
    FilesModule,
    AuthModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
