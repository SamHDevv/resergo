import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ReserveEntity } from './reserve.entity';

@Entity()
export class ServiceEntity {
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

  // @OneToMany(() => ReserveEntity, reserve => reserve.service)
  // reserves: ReserveEntity[];
}