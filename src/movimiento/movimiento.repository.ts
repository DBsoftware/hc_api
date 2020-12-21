import { Movimiento } from './movimiento.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { Subcategoria } from 'src/subcategoria/subcategoria.entity';

@EntityRepository(Movimiento)
export class MovimientoRepository extends Repository<Movimiento> {
  private logger = new Logger('MovimientoRepository');

  async createRecord(dto : CreateMovimientoDto): Promise<Movimiento> {  
    console.log('para salvar',dto)
    const movimiento = new Movimiento();
    movimiento.setValues(dto)
    console.log(movimiento)
    try {
      await movimiento.save();
    } catch (error) {
      this.logger.error(`fallo la creacion del elemento. Data: ${dto}`, error.stack);
      throw new InternalServerErrorException();
    }
    return movimiento;
  }
}
