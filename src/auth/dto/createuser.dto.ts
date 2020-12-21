import { IsString, MinLength, MaxLength, Matches, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  // @MinLength(4)
  // @MaxLength(20)
  correo: string;

  @IsString()
  @MinLength(4)
  // @MaxLength(20)
  // @Matches(
  //   /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  //   { message: 'clave es debil' },
  // )
  clave: string;

  @IsOptional()
  moneda: string

  @IsOptional()
  pais: string

  @IsOptional()
  fecha_registro: number;

  @IsOptional()
  salt: string;

}






