import { Alerta } from './alerta.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';

@EntityRepository(Alerta)
export class AlertaRepository extends Repository<Alerta> {
  private logger = new Logger('alertaRepository');

  async createalerta(dto : CreateAlertaDto): Promise<Alerta> {  
    const alerta = new Alerta();
      alerta.setValues(dto)
    try {
      await alerta.save();
    } catch (error) {
      this.logger.error(`fallo la creacion del elemento. Data: ${dto}`, error.stack);
      throw new InternalServerErrorException();
    }

    delete alerta.presupuesto;
    return alerta;
  }
}











