import { IsNotEmpty } from 'class-validator';

export class CreateSubCategoriaDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  tipo: number;

  @IsNotEmpty()
  imagen: string;

  @IsNotEmpty()
  estado: number;

  @IsNotEmpty()
  id_app: number;

  @IsNotEmpty()
  id_categoria: number;

  @IsNotEmpty()
  id_presupuesto: number;

  @IsNotEmpty()
  disponible: string;

  @IsNotEmpty()
  label_paises: string;
}