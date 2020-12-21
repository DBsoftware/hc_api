import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from 'src/auth/usuario.entity';
import { Categoria } from 'src/categoria/categoria.entity';
import { Subcategoria } from 'src/subcategoria/subcategoria.entity';
import { Movimiento } from 'src/movimiento/movimiento.entity';
import { MovimientoPredeterminado } from 'src/movimiento_predeterminado/movimiento_predeterminado.entity';
import { Alerta } from 'src/alerta/alerta.entity';

@Entity()
export class Presupuesto extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({nullable: true})
  tipo: number;

  @Column()
  fecha: Date;

  @Column({nullable: true})
  estado: number;

  @ManyToOne(type => Usuario, usuario => usuario.presupuesto, { eager: false })
  @JoinColumn({name: 'id_usuario', referencedColumnName: 'id'})
  usuario: Usuario;

  @OneToMany(type => Categoria, categoria => categoria.presupuesto, { eager: true })
  categorias: Categoria[];

  @OneToMany(type => Subcategoria, subcategoria => subcategoria.presupuesto, { eager: true })
  subcategorias: Subcategoria[];

  @OneToMany(type => Movimiento, movimiento => movimiento.presupuesto, { eager: false })
  movimientos: Movimiento[];

  @OneToMany(type => MovimientoPredeterminado, movimientosPredeterminado => movimientosPredeterminado.presupuesto, { eager: true })
  movimientosPredeterminados: MovimientoPredeterminado[];

  @OneToMany(type => Alerta, alerta => alerta.presupuesto, { eager: true })
  alertas: Alerta[];


  @Column({ select: false })
  id_usuario: number;

  @Column()
  id_app: number;


  setValues({ nombre, tipo, fecha, id_app, estado, user }){
    this.nombre = nombre;
    this.tipo = tipo;
    this.fecha = fecha;
    this.id_app = id_app;
    this.estado = estado;
    this.usuario = user
  }


}
