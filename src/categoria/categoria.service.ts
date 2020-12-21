import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaRepository } from './categoria.repository';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { GeneralServiceClass } from 'src/general.service/service';

@Injectable()
export class CategoriaService  extends GeneralServiceClass<Categoria> {
    constructor( @InjectRepository(CategoriaRepository) private categoriaRepository: CategoriaRepository ) {
      super(categoriaRepository)
    }
    async getCategorias(id: number): Promise<Categoria[]> {
      return this.get({ id_presupuesto: id });
    }
  
    async getCategoriasById( id: number, obj: Presupuesto ): Promise<Categoria> {
      return this.getById(id,{ id_presupuesto: obj.id });
    }
  
    async createCategoria( createCategoriaDto: CreateCategoriaDto ): Promise<Categoria> {
      return this.create(createCategoriaDto)
    }
  
    async deleteCategoria(id: number, obj: Presupuesto ): Promise<void> {
      this.delete(id, {presupuesto: obj});
    }
}
