import { Module } from '@nestjs/common';
import { MovimientoPredeterminadoController } from './movimiento_prederterminado.controller';
import { MovimientoPreService } from './movimiento_predeterminado.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { MovimientoPreRepository } from './movimiento_predeterminado.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovimientoPreRepository]),
    AuthModule,
  ],
  controllers: [MovimientoPredeterminadoController],
  providers: [MovimientoPreService]
})
export class MovimientoPredeterminadoModule {}
