import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Connection } from 'typeorm';

@Controller()
export class AppController {
  connection: any;
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    try {
      await this.connection.query('SELECT 1');
      return  'Conexión exitosa a la base de datos' ;
    } catch (error) {
      return 'Error al conectar a la base de datos';
    }
    
  }
}
