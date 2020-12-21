import { Injectable, NotFoundException } from '@nestjs/common';
import { MovimientoRepository } from './movimiento.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { Movimiento } from './movimiento.entity';
import { GeneralServiceClass } from 'src/general.service/service';
import { Subcategoria } from 'src/subcategoria/subcategoria.entity';

@Injectable()
export class MovimientoService extends GeneralServiceClass<Movimiento> {
    constructor( @InjectRepository(MovimientoRepository) private movimentoRepository: MovimientoRepository ) {
      super(movimentoRepository)
    }

    async getMovimientos(id: number): Promise<Movimiento[]> {
      return this.get({ id_subcategoria: id });
    }
    async getMovimientosById( id: number, obj: Subcategoria ): Promise<Movimiento> {
      return this.getById(id,{ id_categoria: obj.id });
    }
    async createMovimiento( createMovimientoDto: CreateMovimientoDto ): Promise<Movimiento> {
      console.log(createMovimientoDto)
      return this.create(createMovimientoDto)
    }
    async deleteMovimiento(id: number, obj: Subcategoria ): Promise<void> {
      this.delete(id, {subcategoria: obj});
    }

}
