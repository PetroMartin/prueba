import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from 'src/entities/usuarios.entity';
@Injectable()
export class UsuarioService { 
  constructor(
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>,
  ) {}

  findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find();
  }

  findOne(id: string): Promise<Usuarios> {
    return this.usuariosRepository.findOne({ where: { idusuario: (id) } });
  }

  create(user: Usuarios): Promise<Usuarios> {
    return this.usuariosRepository.save(user);
  }

  async update(id: number, user: Usuarios): Promise<void> {
    await this.usuariosRepository.update(id, user);
  }

  async remove(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
}
