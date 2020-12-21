import { Injectable, NotFoundException } from '@nestjs/common';
import { MovimientoPreRepository } from './movimiento_predeterminado.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovimientoPreDto } from './dto/create-movimiento_predeterminado.dto';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { MovimientoPredeterminado } from './movimiento_predeterminado.entity';

@Injectable()
export class MovimientoPreService {
    constructor( @InjectRepository(MovimientoPreRepository) private movimentoRepository: MovimientoPreRepository ) {}

    async getMovimientos(obj: Presupuesto): Promise<MovimientoPredeterminado[]> {
      return this.movimentoRepository.getMovimientos(obj);
    }
  
    async getMovimientosById( id: number, obj: Presupuesto ): Promise<MovimientoPredeterminado> {
      const found = await this.movimentoRepository.findOne({ where: { id, id_presupuesto: obj.id } });
      if (!found) 
        throw new NotFoundException(`Movimento identificada con el id: "${id}" no fue encontrada del presupuesto "${obj.nombre}"`);
      return found;
    }
  
    async createMovimiento( createMovimentoDto: CreateMovimientoPreDto): Promise<MovimientoPredeterminado> {
      return this.movimentoRepository.createMovimiento(createMovimentoDto);
    }
  
    async deleteMovimiento(id: number, obj: Presupuesto ): Promise<void> {
      const result = await this.movimentoRepository.delete({ id, presupuesto: obj });
      if (result.affected === 0) 
        throw new NotFoundException(`Movimento con el id: "${id}" no fue encontrada`);
    }
}
