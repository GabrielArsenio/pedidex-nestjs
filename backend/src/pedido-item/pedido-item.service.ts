import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoItemRepository } from './pedido-item.repository';
import { CreatePedidoItemDto } from './dto/create-pedido-item.dto';
import { UpdatePedidoItemDto } from './dto/update-pedido-item.dto';

@Injectable()
export class PedidoItemService {

  constructor(
    @InjectRepository(PedidoItemRepository)
    private userRepository: PedidoItemRepository,
  ) { }

  create(createPedidoItemDto: CreatePedidoItemDto) {
    return this.userRepository.save(createPedidoItemDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updatePedidoItemDto: UpdatePedidoItemDto) {
    return this.userRepository.update(id, updatePedidoItemDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
