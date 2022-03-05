import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { PedidoRepository } from './pedido.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([PedidoRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule { }
