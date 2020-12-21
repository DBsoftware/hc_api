import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Categoria } from 'src/categoria/categoria.entity';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { Movimiento } from 'src/movimiento/movimiento.entity';
import { MovimientoPredeterminado } from 'src/movimiento_predeterminado/movimiento_predeterminado.entity';

@Entity()
export class Subcategoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nombre: string;

  @Column({ nullable: true })
  disponible: string;

  @Column({ nullable: true })
  label_paises: string;

  @Column({ nullable: true })
  imagen: string;

  @Column("bit", { nullable: true })
  tipo: number;

  @Column("bit", { nullable: true })
  estado: number;

  @Column({ nullable: true })
  id_categoria: number;

  @Column({ nullable: true })
  id_presupuesto: number;

  @ManyToOne(type => Presupuesto, presupuesto => presupuesto.subcategorias, { eager: false })
  @JoinColumn({ name: 'id_presupuesto', referencedColumnName: 'id' })
  presupuesto: Presupuesto;

  @ManyToOne(type => Categoria, categoria => categoria.subcategorias, { eager: false, onDelete: "CASCADE" })
  @JoinColumn({ name: 'id_categoria', referencedColumnName: 'id' })
  categoria: Categoria;

  @OneToMany(type => Movimiento, movimiento => movimiento.subcategoria, { eager: true })
  movimientos: Movimiento[];
 
  @OneToMany(type => Movimiento, movimientopredeterminado => movimientopredeterminado.subcategoria, { eager: false })
  movimientosPredeterminados: MovimientoPredeterminado[];

  @Column({ nullable: true })
  id_app: number;

  setValues({ nombre, tipo, id_app, estado, disponible, label_paises, imagen, id_categoria, id_presupuesto }){
    this.nombre = nombre;
    this.label_paises = label_paises;
    this.disponible = disponible;
    this.tipo = tipo;
    this.imagen = imagen;
    this.id_app = id_app;
    this.estado = estado;
    this.id_categoria = id_categoria;
    this.id_presupuesto = id_presupuesto
  }

}
