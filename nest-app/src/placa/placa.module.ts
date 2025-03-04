import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { PlacaController } from './placa.controller';
import { PlacaService } from './placa.service';
import { Placa } from './placa.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Placa]), 
  ],
  controllers: [PlacaController],
  providers: [PlacaService],
  exports: [PlacaService],
})
export class PlacasModule {}
