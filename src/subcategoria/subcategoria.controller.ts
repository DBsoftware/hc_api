import { Controller, Logger, Get, ParseIntPipe, ValidationPipe, Delete, Post, UsePipes, Param, Body, UseGuards } from '@nestjs/common';
import { Subcategoria } from './subcategoria.entity';
import { SubcategoriaService } from './subcategoria.service';
import { CreateSubCategoriaDto } from './dto/create-subcategoria.dto';
import { Categoria } from 'src/categoria/categoria.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('subcategoria')
@UseGuards(AuthGuard())
export class SubcategoriaController {
  private logger = new Logger('SubCategoriaController');

  constructor(private categoriaService: SubcategoriaService) {}

  @Get()
  getSubCategorias( obj: Categoria ): Promise<Subcategoria[]> {
    this.logger.verbose(`Presupuesto "${obj.nombre}" está obteniedo todos los presupuestos.`);
    return this.categoriaService.getSubCategorias(obj.id);
  }

  @Get('/:id')
  getSubCategoriaById( @Param('id', ParseIntPipe) id: number, obj: Categoria, ): Promise<Subcategoria> {
    return this.categoriaService.getSubCategoriasById(id, obj);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSubCategoria( @Body() createSubCategoriaDto: CreateSubCategoriaDto ): Promise<Subcategoria> {
    this.logger.verbose(`Se ha creado una nueva subcategoria. Datos: ${JSON.stringify(createSubCategoriaDto)}`);
    return this.categoriaService.createSubCategoria(createSubCategoriaDto);
  }

  @Delete('/:id')
  deleteSubCategoria( @Param('id', ParseIntPipe) id: number,user: Categoria ): Promise<void> {
    return this.categoriaService.deleteSubCategoria(id, user);
  }
}
