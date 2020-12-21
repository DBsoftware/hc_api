import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { CreateUserDto } from './dto/createuser.dto';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');

  constructor(
    @InjectRepository(UsuarioRepository)
    private userRepository: UsuarioRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<any> {
    return this.userRepository.signUp(createUserDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string, country: string }> {
    const user = await this.userRepository.validateUserPassword(authCredentialsDto);
    const {id, country} = user ? user : {id: null, country: null};

    if (!id) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayload = { id };
    const accessToken = await this.jwtService.sign(payload);
    this.logger.debug(`token generado con los siguientes datos:  ${JSON.stringify(payload)}`);

    return { accessToken, country };
  }
}
