import { Module } from '@nestjs/common';
import { AlertaController } from './alerta.controller';
import { AlertaService } from './alerta.service';
import { AlertaRepository } from './alerta.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlertaRepository]),
    AuthModule,
  ],
  controllers: [AlertaController],
  providers: [AlertaService]
})
export class AlertaModule {}
