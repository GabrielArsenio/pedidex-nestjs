import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Produto extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'varchar', length: 100 })
    codigo: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    nome: string;

    @Column({ nullable: false, type: 'float' })
    preco: number;

    @Column({ nullable: false, type: 'int' })
    estoque: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}