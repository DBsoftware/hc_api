import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PresupuestoService } from './presupueto.service';
import { CreatePresupuestoDto } from './dto/create-presupuesto.dto';
import { Presupuesto } from './presupueto.entity';
import { Usuario } from '../auth/usuario.entity';
import { GetUser } from '../auth/get-user.decorator';

@Controller('presupuesto')
@UseGuards(AuthGuard())
export class PresupuestosController {
  private logger = new Logger('PresupuestosController');

  constructor(private presupuestoService: PresupuestoService) {}

  @Get()
  getTasks( @GetUser() user: Usuario ): Promise<Presupuesto[]> {
    this.logger.verbose(`Usuario "${user.id}" está obteniedo todos los presupuestos.`);
    return this.presupuestoService.getPresupuestos(user.id);
  }

  @Get('/:id')
  getPresupuestoById( @Param('id', ParseIntPipe) id: number, @GetUser() user: Usuario, ): Promise<Presupuesto> {
    return this.presupuestoService.getPresupuestosById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPresupuesto( @Body() createPresupuestoDto: CreatePresupuestoDto, @GetUser() user: Usuario ): Promise<Presupuesto> {
    this.logger.verbose(`Usuario "${user.correo}" ha creado un nuevo presupuesto. Datos: ${JSON.stringify(createPresupuestoDto)}`);
    return this.presupuestoService.createPresupuesto(createPresupuestoDto, user);
  }

  @Delete('/:id')
  deletePresupuesto( @Param('id', ParseIntPipe) id: number, @GetUser() user: Usuario ): Promise<void> {
    return this.presupuestoService.deletePresupuesto(id, user);
  }

}
