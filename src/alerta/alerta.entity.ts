import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { Subcategoria } from 'src/subcategoria/subcategoria.entity';
import { Movimiento } from 'src/movimiento/movimiento.entity';
import { MovimientoPredeterminado } from 'src/movimiento_predeterminado/movimiento_predeterminado.entity';

@Entity()
export class Alerta extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  nombre: string

  @Column({nullable: true})
  descripcion: string
  
  @Column({nullable: true})
  fecha: string
  
  @Column({nullable: true})
  alerta: number

  @Column({nullable: true})
  segunda_alerta: number 
  
  @Column({nullable: true})
  repetir: number 
  
  @Column("bit",{nullable: true})
  estado: number 
  
  @Column({nullable: true})
  id_app: number 
  
  @Column({nullable: true})
  idMov: number 

  @ManyToOne(type => MovimientoPredeterminado, movimiento_predeterminado => movimiento_predeterminado.alertas, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  movimiento_predeterminado: MovimientoPredeterminado;

  @ManyToOne(type => Movimiento, movimiento => movimiento.alertas,  { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({name: 'idMov', referencedColumnName: 'id'})
  movimiento: Movimiento;

  @ManyToOne(type => Presupuesto, presupuesto => presupuesto.alertas,  { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({name: 'id_presupuesto', referencedColumnName: 'id'})
  presupuesto: Presupuesto;


  setValues({nombre, descripcion, fecha, alerta: alert, segunda_alerta, repetir, estado, id_app, idMov, presupuesto}){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.alerta = alert;
    this.segunda_alerta = segunda_alerta;
    this.repetir = repetir;
    this.estado = estado;
    this.id_app = id_app;
    this.idMov = idMov;
    this.presupuesto = presupuesto;
  }
}


