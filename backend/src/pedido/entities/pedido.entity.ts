import { Cliente } from 'src/cliente/entities/cliente.entity';
import { PedidoItem } from 'src/pedido-item/entities/pedido-item.entity';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

@Entity()
export class Pedido extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Cliente, { nullable: false })
    cliente: Cliente;

    @OneToMany(type => PedidoItem, pedidoItem => pedidoItem.pedido)
    pedidoItens: PedidoItem[]

    @Column({ nullable: true, type: 'date' })
    aprovacao: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}