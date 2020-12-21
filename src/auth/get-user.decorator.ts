import { createParamDecorator } from '@nestjs/common';
import { Usuario } from './usuario.entity';

export const GetUser = createParamDecorator((data, req): Usuario => {
  return req.user;
});
