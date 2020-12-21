import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Presupuesto } from '../presupuesto/presupueto.entity';

@Entity()
// @Unique(['correo'])
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  correo: string;

  @Column()
  clave: string;

  @Column()
  pais: string;

  @Column({nullable: true})
  moneda: string;

  @Column("decimal" ,{precision: 20, nullable: true})
  fecha_registro: number;


  @OneToMany(type => Presupuesto, presupuesto => presupuesto.usuario, { eager: false })
  presupuesto: Presupuesto[];

  async validatePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.clave);
  }
}
