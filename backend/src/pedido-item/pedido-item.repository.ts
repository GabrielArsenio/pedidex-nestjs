import { EntityRepository, Repository } from 'typeorm';
import { PedidoItem } from './entities/pedido-item.entity';

@EntityRepository(PedidoItem)
export class PedidoItemRepository extends Repository<PedidoItem> {
}
