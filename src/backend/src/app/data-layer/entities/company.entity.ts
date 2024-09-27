import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class CompanyEntity {
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

  // @ManyToOne(() => UserEntity, user => user.companies)
  // @JoinColumn({ name: 'user_id' })
  // user: UserEntity;
}