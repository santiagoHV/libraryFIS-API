import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PublicationsModule } from './publications/publications.module';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { LoansModule } from './loans/loans.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
    }),
    PublicationsModule,
    AuthorsModule,
    UsersModule,
    FilesModule,
    AuthModule,
    LoansModule,
    DatabaseModule,
  ],
  providers: [],
  exports: []
})
export class AppModule {}
