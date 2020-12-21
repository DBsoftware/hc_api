import { Presupuesto } from './presupueto.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePresupuestoDto } from './dto/create-presupuesto.dto';
import { Usuario } from '../auth/usuario.entity';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Presupuesto)
export class PresupuestoRepository extends Repository<Presupuesto> {
  private logger = new Logger('PresupuestoRepository');

  async createPresupuesto(dto : CreatePresupuestoDto, user: Usuario): Promise<Presupuesto> {  
    const presupuesto = new Presupuesto();
    presupuesto.setValues({...dto, user})
    try {
      await presupuesto.save();
    } catch (error) {
      this.logger.error(`fallo la creacion de presupuesto para el usuario "${user.correo}". Data: ${presupuesto}`, error.stack);
      throw new InternalServerErrorException();
    }

    delete presupuesto.usuario;
    return presupuesto;
  }
}
