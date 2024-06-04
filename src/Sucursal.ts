import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";


@Index("u_codigocucursal", ["codigo"], { unique: true })
@Index("sucursal_fechadealta_descendente", ["fechaDeAlta"], {})
@Index("pk_sucursal", ["idsucursal"], { unique: true })
@Entity("sucursal", { schema: "public" })
export class Sucursal {
  @Column("text", { primary: true, name: "idsucursal" })
  idsucursal: string;

  @Column("character varying", {
    name: "codigo",
    nullable: true,
    unique: true,
    length: 18,
  })
  codigo: string | null;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 255,
  })
  descripcion: string | null;

  @Column("character varying", {
    name: "direccion",
    nullable: true,
    length: 60,
  })
  direccion: string | null;

  @Column("character varying", {
    name: "telefonos",
    nullable: true,
    length: 60,
  })
  telefonos: string | null;

  @Column("integer", { name: "numero", nullable: true, default: () => "0" })
  numero: number | null;

  @Column("text", { name: "idsucursal_grupo", default: () => "'0'" })
  idsucursalGrupo: string;

  @Column("integer", { name: "idlistadeprecios", default: () => "0" })
  idlistadeprecios: number;

  @Column("timestamp without time zone", {
    name: "fecha_de_alta",
    nullable: true,
    default: () => "now()",
  })
  fechaDeAlta: Date | null;

}
