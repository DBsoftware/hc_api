import { Controller, ParseIntPipe, ValidationPipe, Post, UsePipes, Body, Param, Delete, Logger, Get } from '@nestjs/common';
import { MovimientoService } from './movimiento.service';
import { Movimiento } from './movimiento.entity';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { Subcategoria } from 'src/subcategoria/subcategoria.entity';

@Controller('movimiento')
export class MovimientoController {
    private logger = new Logger('movimientoController');

    constructor(private movimientoService: MovimientoService) {}
  
    @Get()
    getMovimientos( obj: Presupuesto ): Promise<Movimiento[]> {
      this.logger.verbose(`Presupuesto "${obj.nombre}" está obteniedo todos los presupuestos.`);
      return this.movimientoService.getMovimientos(obj.id);
    }
  
    @Get('/:id')
    getMovimientoById( @Param('id', ParseIntPipe) id: number, obj: Subcategoria, ): Promise<Movimiento> {
      return this.movimientoService.getMovimientosById(id, obj);
    }
  
    @Post()
    @UsePipes(ValidationPipe)
    createMovimiento( @Body() createMovimientoDto: CreateMovimientoDto ): Promise<Movimiento> {
      this.logger.verbose(`Se ha creado una nueva categoria. Datos: ${JSON.stringify(createMovimientoDto)}`);
      return this.movimientoService.createMovimiento(createMovimientoDto);
    }
  
    @Delete('/:id')
    deleteMovimiento( @Param('id', ParseIntPipe) id: number,sub: Subcategoria ): Promise<void> {
      return this.movimientoService.deleteMovimiento(id, sub);
    }
}
