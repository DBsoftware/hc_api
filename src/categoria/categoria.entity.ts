import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Presupuesto } from 'src/presupuesto/presupueto.entity';
import { Subcategoria } from 'src/subcategoria/subcategoria.entity';

@Entity()
export class Categoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  disponible: string;

  @Column({nullable: true})
  label_paises: string;

  @Column({nullable: true})
  id_presupuesto: number;

  @Column({nullable: true})
  imagen: string;

  @Column("bit",{nullable: true})
  tipo: number;

  @Column("bit",{nullable: true})
  estado: number;

  @ManyToOne(type => Presupuesto, presupuesto => presupuesto.categorias, { eager: false})
  @JoinColumn({name: 'id_presupuesto', referencedColumnName: 'id'})
  presupuesto: Presupuesto;

  @OneToMany(type => Subcategoria, subcategoria => subcategoria.categoria, { eager: true, cascade: true, onDelete: "CASCADE" })
  subcategorias: Subcategoria[];


  @Column({nullable: true})
  id_app: number;

  setValues({ nombre, tipo, id_app, estado, disponible, label_paises, imagen, id_presupuesto }){
    this.nombre = nombre;
    this.label_paises = label_paises;
    this.disponible = disponible;
    this.tipo = tipo;
    this.imagen = imagen;
    this.id_app = id_app;
    this.estado = estado;
    this.id_presupuesto = id_presupuesto;

  }

}
