import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from 'src/auth/usuario.entity';

@Entity()
export class RegistroNotificaciones extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("longtext",{nullable: true})
  sub: string;

  @Column({nullable: true})
  descripcion: string;

  @Column({nullable: true})
  segunda_alerta: string;

  @Column({nullable: true})
  repeat_alarm: string;

  @Column({nullable: true})
  url: string;

  @Column({nullable: true})
  fecha: string;

  @Column({nullable: true})
  estado: number;


  @Column()
  id_alerta: number; 


}

