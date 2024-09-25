import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reserve } from './reserve.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Reserve, reserve => reserve.service)
  reserves: Reserve[];
}