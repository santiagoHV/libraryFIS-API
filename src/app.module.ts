import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [
    // TODO: migrate to env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'santi',
      password: '1603',
      database: 'library_database',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    PublicationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
