import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePresupuestoDto } from './dto/create-presupuesto.dto';
import { PresupuestoRepository } from './presupuesto.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Presupuesto } from './presupueto.entity';
import { Usuario } from '../auth/usuario.entity';
import { GeneralServiceClass } from "../general.service/service";

@Injectable()
export class PresupuestoService extends GeneralServiceClass<Presupuesto> {
  constructor( @InjectRepository(PresupuestoRepository) private presupuestoRepository: PresupuestoRepository ) {
    super(presupuestoRepository)
  }

  async getPresupuestos(user: number): Promise<Presupuesto[]> {
    return this.get({ id_usuario: user });
  }

  async getPresupuestosById( id: number, user: Usuario ): Promise<Presupuesto> {
    return this.getById(id,{ id_usuario: user.id });
  }

  async createPresupuesto( createPresupuestoDto: CreatePresupuestoDto, user: Usuario ): Promise<Presupuesto> {
    return this.presupuestoRepository.createPresupuesto(createPresupuestoDto, user);
  }

  async deletePresupuesto(id: number, user: Usuario ): Promise<void> {
    this.delete(id, {usuario: user});
  }

}
