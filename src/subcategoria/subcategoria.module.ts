import { Module } from '@nestjs/common';
import { SubcategoriaController } from './subcategoria.controller';
import { SubcategoriaService } from './subcategoria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { SubCategoriaRepository } from './subcategoria.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubCategoriaRepository]),
    AuthModule,
  ],
  controllers: [SubcategoriaController],
  providers: [SubcategoriaService]
})
export class SubcategoriaModule {}
