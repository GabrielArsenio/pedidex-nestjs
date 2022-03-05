import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Produto } from 'src/produto/entities/produto.entity';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class PedidoItem extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Produto, { nullable: false })
    produto: Produto;

    @ManyToOne(type => Pedido, { nullable: false })
    pedido: Pedido;

    @Column({ nullable: false, type: 'float' })
    quantidade: number;

    @Column({ nullable: false, type: 'float' })
    valorUnitario: number;

    @Column({ nullable: false, type: 'float' })
    valorTotal: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}