import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from 'src/auth/usuario.entity';

@Entity()
export class Visibilidadcategoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estado: number;

  @Column()
  id_categoria: number;

  @Column()
  id_presupuesto: number;
}
