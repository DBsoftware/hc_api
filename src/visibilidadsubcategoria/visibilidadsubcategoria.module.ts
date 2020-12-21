import { Module } from '@nestjs/common';
import { VisibilidadsubcategoriaService } from './visibilidadsubcategoria.service';
import { VisibilidadsubcategoriaController } from './visibilidadsubcategoria.controller';

@Module({
  providers: [VisibilidadsubcategoriaService],
  controllers: [VisibilidadsubcategoriaController]
})
export class VisibilidadsubcategoriaModule {}
