import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from 'src/auth/usuario.entity';

@Entity()
export class Visibilidadsubcategoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estado: number;

  @Column()
  id_subcategoria: number;

  @Column()
  id_presupuesto: number;
}

