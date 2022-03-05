import { Module } from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';
import { PedidoItemController } from './pedido-item.controller';
import { PedidoItemRepository } from './pedido-item.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([PedidoItemRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [PedidoItemController],
  providers: [PedidoItemService]
})
export class PedidoItemModule { }
