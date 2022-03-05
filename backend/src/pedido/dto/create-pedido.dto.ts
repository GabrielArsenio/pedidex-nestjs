import { IsNotEmpty } from "class-validator";
import { Cliente } from "src/cliente/entities/cliente.entity";
import { PedidoItem } from "src/pedido-item/entities/pedido-item.entity";

export class CreatePedidoDto {
    @IsNotEmpty({ message: 'Informe o cliente' })
    cliente: Cliente;

    @IsNotEmpty({ message: 'Informe os itens do pedido' })
    pedidoItens: PedidoItem[]

    aprovacao: Date;
}
