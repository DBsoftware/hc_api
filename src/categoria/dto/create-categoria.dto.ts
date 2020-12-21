import { IsNotEmpty } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  disponible: string;

  @IsNotEmpty()
  label_paises: string;

  @IsNotEmpty()
  tipo: number;

  @IsNotEmpty()
  imagen: string;

  @IsNotEmpty()
  estado: number;

  @IsNotEmpty()
  id_app: number;

  @IsNotEmpty()
  id_presupuesto: number;
}