import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { PedidoItem } from 'src/pedido-item/entities/pedido-item.entity';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    @IsNotEmpty({ message: 'Informe o cliente' })
    cliente: Cliente;

    @IsNotEmpty({ message: 'Informe os itens do pedido' })
    pedidoItens: PedidoItem[]

    aprovacao: Date;
}
