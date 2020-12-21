import { Module } from '@nestjs/common';
import { MovimientoController } from './movimiento.controller';
import { MovimientoService } from './movimiento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { MovimientoRepository } from './movimiento.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovimientoRepository]),
    AuthModule,
  ],
  controllers: [MovimientoController],
  providers: [MovimientoService]
})
export class MovimientoModule {}
