import { Module } from '@nestjs/common';
import { PresupuestosModule } from './presupuesto/presupueto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { CategoriaModule } from './categoria/categoria.module';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';
import { MovimientoModule } from './movimiento/movimiento.module';
import { RegistroNotificacionesModule } from './registro-notificaciones/registro-notificaciones.module';
import { VisibilidadcategoriaModule } from './visibilidadcategoria/visibilidadcategoria.module';
import { VisibilidadsubcategoriaModule } from './visibilidadsubcategoria/visibilidadsubcategoria.module';
import { AlertaModule } from './alerta/alerta.module';
import { MovimientoPredeterminadoModule } from './movimiento_predeterminado/movimiento_predeterminado.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PresupuestosModule,
    AuthModule,
    CategoriaModule,
    SubcategoriaModule,
    MovimientoModule,
    MovimientoPredeterminadoModule,
    RegistroNotificacionesModule,
    VisibilidadcategoriaModule,
    VisibilidadsubcategoriaModule,
    AlertaModule,
  ],
})
export class AppModule {}
