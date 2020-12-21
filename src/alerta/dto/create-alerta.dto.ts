import { IsNotEmpty } from 'class-validator';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';

export class CreateAlertaDto {
    @IsNotEmpty()
    nombre: string;
    
    @IsNotEmpty()
    descripcion: string;
    
    @IsNotEmpty()
    fecha: string;
    
    @IsNotEmpty()
    alerta: number;
    
    @IsNotEmpty()
    segunda_alerta: number;
    
    @IsNotEmpty()
    repetir: number;
    
    @IsNotEmpty()
    estado: number; 
    
    @IsNotEmpty()
    id_app: number;
    
    @IsNotEmpty()
    idMov: number;
    
    @IsNotEmpty()
    presupuesto: Presupuesto;
}


