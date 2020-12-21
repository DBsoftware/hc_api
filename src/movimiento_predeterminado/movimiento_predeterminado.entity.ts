import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from 'src/auth/usuario.entity';
import { Subcategoria } from 'src/subcategoria/subcategoria.entity';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { Alerta } from 'src/alerta/alerta.entity';

@Entity()
export class MovimientoPredeterminado extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  descripcion: string;

  @Column({nullable: true})
  fecha_creacion: Date;

  @Column({nullable: true})
  fecha_movimiento: Date;

  @Column("bit",{nullable: true})
  tipo: number;

  @Column({nullable: true})
  fijo: number;

  @Column({nullable: true})
  valor: string;

  @OneToMany(type => Alerta, alerta => alerta.movimiento_predeterminado, { eager: true })
  alertas: Alerta[];

  @ManyToOne(type => Presupuesto, presupuesto => presupuesto.movimientosPredeterminados, { eager: false })
  @JoinColumn({name: 'id_presupuesto', referencedColumnName: 'id'})
  presupuesto: Presupuesto;

  @ManyToOne(type => Subcategoria, subcategoria => subcategoria.movimientosPredeterminados, { eager: true })
  @JoinColumn({name: 'id_subcategoria', referencedColumnName: 'id'})
  subcategoria: Subcategoria;

  @Column({nullable: true})
  id_app: number;

  @Column({nullable: true})
  id_subcategoria: number;

  @Column({nullable: true})
  id_presupuesto: number;

  setValues({ descripcion, fecha_creacion, fecha_movimiento, tipo, fijo, valor, id_subcategoria, id_presupuesto, id_app }){
    this.descripcion = descripcion
    this.fecha_creacion = fecha_creacion
    this.fecha_movimiento = fecha_movimiento
    this.tipo = tipo
    this.fijo = fijo
    this.valor = valor
    this.id_subcategoria = id_subcategoria
    this.id_presupuesto = id_presupuesto
    this.id_app = id_app
  }

}