import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoRepository } from './pedido.repository';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {

  constructor(
    @InjectRepository(PedidoRepository)
    private userRepository: PedidoRepository,
  ) { }

  create(createPedidoDto: CreatePedidoDto) {
    return this.userRepository.save(createPedidoDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.userRepository.update(id, updatePedidoDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
