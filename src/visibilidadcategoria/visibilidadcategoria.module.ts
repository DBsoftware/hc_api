import { Module } from '@nestjs/common';
import { VisibilidadcategoriaService } from './visibilidadcategoria.service';
import { VisibilidadcategoriaController } from './visibilidadcategoria.controller';

@Module({
  providers: [VisibilidadcategoriaService],
  controllers: [VisibilidadcategoriaController]
})
export class VisibilidadcategoriaModule {}
