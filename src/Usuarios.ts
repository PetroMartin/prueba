import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";



@Entity("usuarios")
export class Usuarios {
  @Column("text", { primary: true, name: "idusuario" })
  idusuario: string;

  @Column("character varying", { name: "codigo", nullable: true, length: 12 })
  codigo: string | null;

  @Column("character varying", { name: "nombre", nullable: true, length: 60 })
  nombre: string | null;

  @Column("timestamp without time zone", {
    name: "fecha_de_alta",
    nullable: true,
  })
  fechaDeAlta: Date | null;

  @Column("timestamp without time zone", {
    name: "fecha_de_baja",
    nullable: true,
  })
  fechaDeBaja: Date | null;

  @Column("character varying", { name: "clave", nullable: true, length: 15 })
  clave: string | null;

  @Column("integer", { name: "idgrupo" })
  idgrupo: number;

  @Column("character", { name: "permiso", nullable: true, length: 2 })
  permiso: string | null;

  @Column("character varying", {
    name: "ciusuario",
    length: 30,
    default: () => "'999999'",
  })
  ciusuario: string;

  @Column("character varying", {
    name: "nombreusuario",
    nullable: true,
    length: 120,
  })
  nombreusuario: string | null;

  @Column("character varying", {
    name: "apellidousuario",
    length: 120,
    default: () => "'NO INGRESADO'",
  })
  apellidousuario: string;

  @Column("character", {
    name: "operaenterminalpos",
    nullable: true,
    length: 2,
    default: () => "'No'",
  })
  operaenterminalpos: string | null;

  @Column("character", { name: "habilitado", nullable: true, length: 2 })
  habilitado: string | null;

  @Column("character varying", {
    name: "validaporturno",
    nullable: true,
    length: 2,
    default: () => "'Si'",
  })
  validaporturno: string | null;

  @Column("character", { name: "activa_verasiento", nullable: true, length: 2 })
  activaVerasiento: string | null;

  @Column("timestamp without time zone", {
    name: "ultimoacceso",
    nullable: true,
  })
  ultimoacceso: Date | null;


}
