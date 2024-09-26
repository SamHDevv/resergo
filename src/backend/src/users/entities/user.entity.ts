import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';
import { UserRole } from '../entities/user-role.entity';

@Entity()
export class User {
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

  @OneToMany(() => Business, business => business.user)
  companies: Business[];

  @OneToMany(() => UserRole, userRole => userRole.user)
  userRoles: UserRole[];
}