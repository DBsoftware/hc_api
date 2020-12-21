import { Module } from '@nestjs/common';
import { PresupuestosController } from './presupuesto.controller';
import { PresupuestoService } from './presupueto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  PresupuestoRepository } from './presupuesto.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PresupuestoRepository]),
    AuthModule,
  ],
  controllers: [PresupuestosController],
  providers: [PresupuestoService],
})
export class PresupuestosModule {}
