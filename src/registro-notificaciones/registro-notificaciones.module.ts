import { Module } from '@nestjs/common';
import { RegistroNotificacionesController } from './registro-notificaciones.controller';
import { RegistroNotificacionesService } from './registro-notificaciones.service';

@Module({
  controllers: [RegistroNotificacionesController],
  providers: [RegistroNotificacionesService]
})
export class RegistroNotificacionesModule {}
