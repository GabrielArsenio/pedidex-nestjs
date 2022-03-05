import { EntityRepository, Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';

@EntityRepository(Pedido)
export class PedidoRepository extends Repository<Pedido> {
}
