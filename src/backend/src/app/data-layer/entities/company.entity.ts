import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'Name',
    type: 'varchar',
    length: 100,
    unique: false,
    nullable: false
  })
  name: string;

  @Column({
    name: 'Adress',
    type: 'varchar',
    length: 100,
    unique: false,
    nullable: false
  })
  adress: string;

  @Column({
    name: 'Phone',
    type: 'varchar',
    length: 15,
    unique: false,
    nullable: false
  })
  phone: string;

  @Column({
    name: 'Email',
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false
  })
  email: string;

  @Column({ 
    name: 'Active',
    type: 'boolean',
    unique: false,
    default: true 
  })
  active: boolean;

  @Column({
    name: 'Description',
    type: 'text',
    nullable: true
  })
  schedule: string;

  // @ManyToOne(() => UserEntity, user => user.companies)
  // @JoinColumn({ name: 'user_id' })
  // user: UserEntity;
}