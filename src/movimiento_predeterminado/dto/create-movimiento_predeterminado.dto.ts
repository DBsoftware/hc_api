import { IsNotEmpty } from 'class-validator';
import { Subcategoria } from 'src/subcategoria/subcategoria.entity';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';

export class CreateMovimientoPreDto {
  id: any

  descripcion: string;

  @IsNotEmpty()
  fecha_creacion: Date;

  @IsNotEmpty()
  fecha_movimiento: Date;

  @IsNotEmpty()
  tipo: number;

  @IsNotEmpty()
  fijo: number;

  @IsNotEmpty()
  valor: string;

  @IsNotEmpty()
  id_subcategoria: Subcategoria;

  @IsNotEmpty()
  id_presupuesto: Presupuesto;

  @IsNotEmpty()
  id_app: number;
}

