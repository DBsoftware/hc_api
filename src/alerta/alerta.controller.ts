import { Controller, Logger, Param, Get, ParseIntPipe, Body, ValidationPipe, UsePipes, Post, Delete } from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { Alerta } from './alerta.entity';
import { CreateAlertaDto } from './dto/create-alerta.dto';

@Controller('alerta')
export class AlertaController {
    private logger = new Logger('AlertaController');

    constructor(private alertaService: AlertaService) {}
  
    @Get()
    getTasks( obj: Presupuesto ): Promise<Alerta[]> {
      this.logger.verbose(`Presupuesto "${obj.nombre}" está obteniedo todos los presupuestos.`);
      return this.alertaService.getAlertas(obj.id);
    }
  
    @Get('/:id')
    getPresupuestoById( @Param('id', ParseIntPipe) id: number, obj: Presupuesto, ): Promise<Alerta> {
      return this.alertaService.getAlertasById(id, obj);
    }
  
    @Post()
    @UsePipes(ValidationPipe)
    createalerta( @Body() createalertaDto: CreateAlertaDto, obj: Presupuesto ): Promise<Alerta> {
      this.logger.verbose(`Del presupuesto "${obj.nombre}" se ha creado una nueva alerta. Datos: ${JSON.stringify(createalertaDto)}`);
      return this.alertaService.createAlerta(createalertaDto);
    }
  
    @Delete('/:id')
    deletealerta( @Param('id', ParseIntPipe) id: number,user: Presupuesto ): Promise<void> {
      return this.alertaService.deleteAlerta(id, user);
    }
}
