import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { ProdutoRepository } from './produto.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProdutoRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService]
})
export class ProdutoModule { }
