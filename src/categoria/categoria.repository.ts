import { Categoria } from './categoria.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';

@EntityRepository(Categoria)
export class CategoriaRepository extends Repository<Categoria> {
  private logger = new Logger('CategoriaRepository');

  async createRecord(dto : CreateCategoriaDto): Promise<Categoria> {  
    console.log('confirmar', dto)
    
    const categoria = new Categoria();
        categoria.setValues(dto)
    try {
      await categoria.save();
    } catch (error) {
      this.logger.error(`fallo la creacion del elemento. Data: ${dto}`, error.stack);
      throw new InternalServerErrorException();
    }

    delete categoria.presupuesto;
    return categoria;
  }
}