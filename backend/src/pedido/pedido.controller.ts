import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedido')
@UseGuards(AuthGuard())
export class PedidoController {
  constructor(private readonly pedidoItemService: PedidoService) { }

  @Post()
  create(@Body(ValidationPipe) createPedidoDto: CreatePedidoDto) {
    return this.pedidoItemService.create(createPedidoDto);
  }

  @Get()
  findAll() {
    return this.pedidoItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(ValidationPipe) updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoItemService.update(+id, updatePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoItemService.remove(+id);
  }
}
