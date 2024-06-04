import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuarios } from '../entities/usuarios.entity';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    findAll(): Promise<Usuarios[]> {
      return this.usuarioService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Usuarios> {
      return this.usuarioService.findOne(id);
    }
  
    @Post()
    create(@Body() user: Usuarios): Promise<Usuarios> {
      return this.usuarioService.create(user);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() user: Usuarios): Promise<void> {
      return this.usuarioService.update(id, user);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.usuarioService.remove(id);
    }
}
