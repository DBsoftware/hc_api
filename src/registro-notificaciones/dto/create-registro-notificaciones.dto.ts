import { IsNotEmpty } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty()
  sub: string;

  @IsNotEmpty()
  id_alerta: number; 

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  fecha: string;
 
  @IsNotEmpty()
  segunda_alerta: string;

  @IsNotEmpty()
  repeat_alarm: string;

  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  estado: number;


}