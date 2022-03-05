import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";

export class CreatePedidoItemDto {
    @IsNotEmpty({ message: 'Informe o produto' })
    produto: Produto;

    @IsNotEmpty({ message: 'Informe a quantidade' })
    quantidade: number;

    @IsNotEmpty({ message: 'Informe o valor unitário' })
    valorUnitario: number;

    @IsNotEmpty({ message: 'Informe o valor total' })
    valorTotal: number;
}
