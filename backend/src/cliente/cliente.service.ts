import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteRepository } from './cliente.repository';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(ClienteRepository)
    private userRepository: ClienteRepository,
  ) { }

  create(createClienteDto: CreateClienteDto) {
    return this.userRepository.save(createClienteDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.userRepository.update(id, updateClienteDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
