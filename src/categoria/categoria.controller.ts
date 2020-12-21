import { Controller, UseGuards, NotFoundException, Get, Param, Post, UsePipes, ValidationPipe, ParseIntPipe, Delete, Body, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Controller('categoria')
// @UseGuards(AuthGuard())
export class CategoriaController {
  private logger = new Logger('CategoriaController');

  constructor(private categoriaService: CategoriaService) {}

  @Get()
  getTasks( obj: Presupuesto ): Promise<Categoria[]> {
    this.logger.verbose(`Presupuesto "${obj.nombre}" está obteniedo todos los presupuestos.`);
    return this.categoriaService.getCategorias(obj.id);
  }

  @Get('/:id')
  getPresupuestoById( @Param('id', ParseIntPipe) id: number, obj: Presupuesto, ): Promise<Categoria> {
    return this.categoriaService.getCategoriasById(id, obj);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCategoria( @Body() createCategoriaDto: CreateCategoriaDto ): Promise<Categoria> {
    this.logger.verbose(`Del presupuesto  se ha creado una nueva categoria. Datos: ${JSON.stringify(createCategoriaDto)}`);
    return this.categoriaService.createCategoria(createCategoriaDto);
  }

  @Delete('/:id')
  deleteCategoria( @Param('id', ParseIntPipe) id: number,user: Presupuesto ): Promise<void> {
    return this.categoriaService.deleteCategoria(id, user);
  }
}
