import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('text')
  public username: string;

  @Column('text')
  public email: string;
}
