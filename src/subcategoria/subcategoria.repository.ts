import { Subcategoria } from './subcategoria.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSubCategoriaDto } from './dto/create-subcategoria.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { Categoria } from 'src/categoria/categoria.entity';

@EntityRepository(Subcategoria)
export class SubCategoriaRepository extends Repository<Subcategoria> {
  private logger = new Logger('CategoriaRepository');

  async createSubCategoria({ nombre, tipo, id_app, estado, disponible, label_paises, imagen, id_categoria, id_presupuesto } : CreateSubCategoriaDto): Promise<Subcategoria> { 
    console.log('...',nombre) 
    const subcategoria = new Subcategoria();
    subcategoria.setValues({ nombre, tipo, id_app, estado, disponible, label_paises, imagen, id_categoria, id_presupuesto })
    try {
      await subcategoria.save();
    } catch (error) {
      this.logger.error(`fallo la creacion de la subcategoria.`, error.stack);
      throw new InternalServerErrorException();
    }

    delete subcategoria.presupuesto;
    delete subcategoria.categoria;
    return subcategoria;
  }
}