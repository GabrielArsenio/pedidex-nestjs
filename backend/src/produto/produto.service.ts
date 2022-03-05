import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoRepository } from './produto.repository';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(ProdutoRepository)
    private userRepository: ProdutoRepository,
  ) { }

  create(createProdutoDto: CreateProdutoDto) {
    return this.userRepository.save(createProdutoDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.userRepository.update(id, updateProdutoDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
