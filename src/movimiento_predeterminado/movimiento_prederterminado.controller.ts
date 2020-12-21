import { Controller, ParseIntPipe, ValidationPipe, Post, UsePipes, Body, Param, Delete, Logger, Get } from '@nestjs/common';
import { MovimientoPreService } from './movimiento_predeterminado.service';
import { MovimientoPredeterminado } from './movimiento_predeterminado.entity';
import { CreateMovimientoPreDto } from './dto/create-movimiento_predeterminado.dto';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';

@Controller('predeterminado')
export class MovimientoPredeterminadoController {
    private logger = new Logger('movimientoPreController');

    constructor(private movimientoService: MovimientoPreService) {}
  
    @Get()
    getTasks( obj: Presupuesto ): Promise<MovimientoPredeterminado[]> {
      this.logger.verbose(`Presupuesto "${obj.nombre}" está obteniedo todos los presupuestos.`);
      // return this.movimientoService.getMovimientos(obj);
      console.log('movimiento predeter')
      return null;
    }
  
    @Get('/:id')
    getPresupuestoById( @Param('id', ParseIntPipe) id: number, obj: Presupuesto, ): Promise<MovimientoPredeterminado> {
      return this.movimientoService.getMovimientosById(id, obj);
    }
  
    @Post()
    @UsePipes(ValidationPipe)
    createMovimiento( @Body() createMovimientoDto: CreateMovimientoPreDto ): Promise<MovimientoPredeterminado> {
      this.logger.verbose(`Datos: ${JSON.stringify(createMovimientoDto)}`);
      return this.movimientoService.createMovimiento(createMovimientoDto);
    }

  
    @Delete('/:id')
    deleteCategoria( @Param('id', ParseIntPipe) id: number,user: Presupuesto ): Promise<void> {
      return this.movimientoService.deleteMovimiento(id, user);
    }
}
