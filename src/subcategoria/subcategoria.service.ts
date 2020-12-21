import { Injectable, NotFoundException } from '@nestjs/common';
import { SubCategoriaRepository } from './subcategoria.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from 'src/categoria/categoria.entity';
import { Subcategoria } from './subcategoria.entity';
import { CreateSubCategoriaDto } from './dto/create-subcategoria.dto';
import { GeneralServiceClass } from 'src/general.service/service';

@Injectable()
export class SubcategoriaService extends GeneralServiceClass<Subcategoria> {
    constructor( @InjectRepository(SubCategoriaRepository) private subcategoriaRepository: SubCategoriaRepository ) {
      super(subcategoriaRepository);
    }

    async getSubCategorias(id: number): Promise<Subcategoria[]> {
      return this.get({ id_categoria: id });
    }
  
    async getSubCategoriasById( id: number, obj: Categoria ): Promise<Subcategoria> {
      return this.getById(id,{ id_categoria: obj.id });
    }
  
    async createSubCategoria( subcreateCategoriaDto: CreateSubCategoriaDto ): Promise<Subcategoria> {
      console.log(subcreateCategoriaDto)
      return this.subcategoriaRepository.createSubCategoria(subcreateCategoriaDto)
    }
  
    async deleteSubCategoria(id: number, obj: Categoria ): Promise<void> {
      this.delete(id, {categoria: obj});
    }
}
