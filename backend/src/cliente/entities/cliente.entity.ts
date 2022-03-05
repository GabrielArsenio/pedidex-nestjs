import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Cliente extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'varchar', length: 20 })
    documento: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    nome: string;

    @Column({ nullable: false, type: 'varchar', length: 20 })
    telefone: string;

    @Column({ nullable: true, type: 'varchar', length: 120 })
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}