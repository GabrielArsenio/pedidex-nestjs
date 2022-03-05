import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { ClienteRepository } from './cliente.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClienteRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule { }
