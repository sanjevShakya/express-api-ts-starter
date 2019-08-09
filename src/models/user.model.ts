import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
    public id: number;

  @Column({ type: "text" })
  public username: string;

  @Column({ type: "text" })
  public email: string;

  @CreateDateColumn({ type: "timestamp" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt: Date;

  @Column({ type: "timestamp", nullable: true })
  public deletedAt: Date;
}
