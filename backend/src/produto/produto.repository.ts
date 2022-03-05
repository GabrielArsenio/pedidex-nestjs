import { EntityRepository, Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@EntityRepository(Produto)
export class ProdutoRepository extends Repository<Produto> {
}
