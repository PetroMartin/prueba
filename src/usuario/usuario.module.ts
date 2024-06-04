import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuarios } from 'src/entities/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios])],
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
