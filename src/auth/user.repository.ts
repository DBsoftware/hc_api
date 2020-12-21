import { Repository, EntityRepository } from 'typeorm';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { Usuario } from './usuario.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from './dto/createuser.dto';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
  async signUp({ correo, clave, moneda, pais, fecha_registro}: CreateUserDto): Promise<any> {
    const user = new Usuario();
    user.correo = correo;
    user.moneda = moneda;
    user.pais = pais;
    fecha_registro = fecha_registro
    user.clave = await this.hashPassword(clave);
    try {
      await user.save();
      return {correo}
    } catch (error) {
      if (error.code === '23505') { // duplicate username
        throw new ConflictException('Usuario ya existe');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword({ correo, clave }: AuthCredentialsDto): Promise<any> {
    const user = await this.findOne({ correo });
    if (user && await user.validatePassword(clave)) 
      return {id: `${user.id}`, country: user.moneda};
     
    return null;
 
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, await bcrypt.genSalt(10));
  }
}
