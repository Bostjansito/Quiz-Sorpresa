import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PlacaService } from './placa.service';
import { CreatePlacaDto } from './create-placa.dto';

@Controller('placas')
export class PlacaController {
  constructor(private readonly placaService: PlacaService) {}

  // Endpoint para crear una nueva placa
  @Post()
  create(@Body() createPlacaDto: CreatePlacaDto) {
    return this.placaService.create(createPlacaDto);
  }

  // Endpoint para obtener todas las placas
  @Get()
  findAll() {
    return this.placaService.findAll();
  }

  // Endpoint para obtener una placa por su número
  @Get(':placa')
  findOne(@Param('placa') placa: string) {
    return this.placaService.findOne(placa);
  }

  // Endpoint para eliminar una placa por su número
  @Delete(':placa')
  remove(@Param('placa') placa: string) {
    return this.placaService.remove(placa);
  }
}
