import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Company } from './company.entity';
import { UserRole } from './user-role.entity';

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

  @OneToMany(() => Company, company => company.user)
  companies: Company[];

  @OneToMany(() => UserRole, userRole => userRole.user)
  userRoles: UserRole[];
}