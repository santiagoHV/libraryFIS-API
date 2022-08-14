import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationsModule } from 'src/publications/publications.module';
import { UsersService } from 'src/users/services/users.service';
import { UsersModule } from 'src/users/users.module';
import { LoansController } from './controllers/loans.controller';
import { Loan } from './entities/loan.entity';
import { LoansService } from './services/loans.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Loan]),
    UsersModule, 
    PublicationsModule
  ],
  providers: [LoansService],
  controllers: [LoansController],
  exports: [LoansService]
})
export class LoansModule {}
