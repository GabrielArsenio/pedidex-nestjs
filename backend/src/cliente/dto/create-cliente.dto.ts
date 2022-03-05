import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateClienteDto {
    @IsNotEmpty({ message: 'Informe o documento do cliente' })
    @MinLength(11, { message: 'O documento deve ter pelo menos 11 caracteres' })
    @MaxLength(20, { message: 'O documento deve ter no máximo 20 caracteres' })
    documento: string;

    @IsNotEmpty({ message: 'Informe o nome do cliente' })
    @MinLength(5, { message: 'O nome deve ter pelo menos 5 caracteres' })
    @MaxLength(200, { message: 'O nome deve ter no máximo 200 caracteres' })
    nome: string;

    @IsNotEmpty({ message: 'Informe o telefone do cliente' })
    @MaxLength(20, { message: 'O telefone deve ter no máximo 20 caracteres' })
    telefone: string;

    @IsNotEmpty({ message: 'Informe um endereço de email' })
    @IsEmail({}, { message: 'Informe um endereço de email válido' })
    @MaxLength(200, { message: 'O endereço de email deve ter no máximo 200 caracteres' })
    email: string;
}
