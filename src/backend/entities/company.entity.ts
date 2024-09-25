import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()

  @Column()
  name: string;

  @Column()
  adress: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ default: true })
  active: boolean;

  @Column()
  schedule: string;

  @ManyToOne(() => User, user => user.companies)
  @JoinColumn({ name: 'user_id' })
  user: User;
}