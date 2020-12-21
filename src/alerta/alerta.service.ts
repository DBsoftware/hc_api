import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlertaRepository } from './alerta.repository';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { Alerta } from './alerta.entity';
import { GeneralServiceClass } from 'src/general.service/service';

@Injectable()
export class AlertaService extends GeneralServiceClass<Alerta> {
    constructor( @InjectRepository(AlertaRepository) private alertaRepository: AlertaRepository ) {
    super(alertaRepository)
  }
  async getAlertas(id: number): Promise<Alerta[]> {
    return this.get({ id_presupuesto: id });
  }

  async getAlertasById( id: number, obj: Presupuesto ): Promise<Alerta> {
    return this.getById(id,{ id_presupuesto: obj.id });
  }

  async createAlerta( createAlertaDto: CreateAlertaDto): Promise<Alerta> {
    return this.alertaRepository.createalerta(createAlertaDto);
  }

  async deleteAlerta(id: number, obj: Presupuesto ): Promise<void> {
    this.delete(id, {presupuesto: obj});
  }
}
