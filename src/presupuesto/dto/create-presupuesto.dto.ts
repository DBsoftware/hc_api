import { IsNotEmpty } from 'class-validator';

export class CreatePresupuestoDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  tipo: number;

  @IsNotEmpty()
  fecha: Date;

  @IsNotEmpty()
  estado: number;

  @IsNotEmpty()
  id_app: number;
}
