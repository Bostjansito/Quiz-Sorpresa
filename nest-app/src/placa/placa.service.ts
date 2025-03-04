import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Placa } from './placa.entity';
import { CreatePlacaDto } from './create-placa.dto';


@Injectable()
export class PlacaService {
  constructor(
    @InjectRepository(Placa)
    private placaRepository: Repository<Placa>,
  ) {}

  // Crear una nueva placa
  async create(createPlacaDto: CreatePlacaDto): Promise<Placa> {
    const nuevaPlaca = this.placaRepository.create(createPlacaDto);
    return await this.placaRepository.save(nuevaPlaca);
  }

  // Obtener todas las placas
  async findAll(): Promise<Placa[]> {
    return await this.placaRepository.find();
  }

  // Obtener una placa por su número
  async findOne(placa: string): Promise<Placa | null> {
    const placaEncontrada = await this.placaRepository.findOne({ where: { placa } });
  
    if (!placaEncontrada) {
      console.log(`Placa ${placa} no encontrada.`);
      return null;
    }
  
    return placaEncontrada;
  }
  

  // Eliminar una placa por su número
  async remove(placa: string): Promise<boolean> {
    const result = await this.placaRepository.delete({ placa });
    return result.affected ? result.affected > 0 : false;
  }
  
  }

