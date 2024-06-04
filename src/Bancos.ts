import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";

@Index("unq1_bancos", ["codigobanco"], { unique: true })
@Index("pk_bancos", ["idbanco"], { unique: true })
@Entity("bancos", { schema: "public" })
export class Bancos {
  @Column("text", { primary: true, name: "idbanco" })
  idbanco: string;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 60,
  })
  descripcion: string | null;

  @Column("character varying", {
    name: "direccion",
    nullable: true,
    length: 60,
  })
  direccion: string | null;

  @Column("character varying", { name: "ciudad", nullable: true, length: 60 })
  ciudad: string | null;

  @Column("character varying", {
    name: "provincia",
    nullable: true,
    length: 60,
  })
  provincia: string | null;

  @Column("character varying", {
    name: "telefonos",
    nullable: true,
    length: 60,
  })
  telefonos: string | null;

  @Column("character varying", { name: "contacto", nullable: true, length: 60 })
  contacto: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 60 })
  email: string | null;

  @Column("character varying", {
    name: "codigobanco",
    nullable: true,
    length: 6,
  })
  codigobanco: string | null;

  @OneToOne(() => Bancos, (bancos) => bancos.bancos, { onUpdate: "CASCADE" })
  @JoinColumn([{ name: "idbanco", referencedColumnName: "idbanco" }])
  idbanco2: Bancos;

  @OneToOne(() => Bancos, (bancos) => bancos.idbanco2)
  bancos: Bancos;

  }
