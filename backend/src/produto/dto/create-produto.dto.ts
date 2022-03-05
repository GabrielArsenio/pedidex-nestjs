import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateProdutoDto {
    @MaxLength(100, { message: 'O código deve ter no máximo 100 caracteres' })
    codigo: string;

    @IsNotEmpty({ message: 'Informe o nome do produto' })
    @MinLength(5, { message: 'O nome deve ter pelo menos 5 caracteres' })
    @MaxLength(200, { message: 'O nome deve ter no máximo 200 caracteres' })
    nome: string;

    @IsNotEmpty({ message: 'Informe o preço do produto' })
    preco: number;

    @IsNotEmpty({ message: 'Informe o estoque do produto' })
    estoque: number;
}
