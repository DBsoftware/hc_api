import { MovimientoPredeterminado } from './movimiento_predeterminado.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateMovimientoPreDto } from './dto/create-movimiento_predeterminado.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';

@EntityRepository(MovimientoPredeterminado)
export class MovimientoPreRepository extends Repository<MovimientoPredeterminado> {
  private logger = new Logger('MovimientoRepository');

  async getMovimientos(presupuesto: Presupuesto): Promise<MovimientoPredeterminado[]> {
    const query = this.createQueryBuilder('movimiento');
    query.where('movimiento.id_presupuesto = :id_presupuesto', { id_presupuesto: presupuesto.id });
    try {
      const results = await query.getMany();
      return results;
    } catch (error) {
      this.logger.error(`La operacion de obtencion de categorias falló para el presupuesto "${presupuesto.nombre}"`, error.stack);
      throw new InternalServerErrorException();
    }
  }

  async createMovimiento(dto : CreateMovimientoPreDto): Promise<MovimientoPredeterminado> {  
    const movimiento = new MovimientoPredeterminado();
          movimiento.setValues(dto)
          if ('id' in dto && typeof dto['id'] === 'number') {
            console.log('hellllllo --------******' ,dto['id'])
            movimiento.id = dto['id']
          }
    try {
      await movimiento.save();
    } catch (error) {
      this.logger.error(`fallo la creacion de categoria para el presupuesto. Data: ${movimiento}`, error.stack);
      throw new InternalServerErrorException();
    }
    return movimiento;
  }
}
