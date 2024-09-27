import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { CompanyEntity } from './company.entity';
import { UserRoleEntity } from './user-role.entity';

@Entity('user')
export class UserEntity {
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

  // @OneToMany(() => CompanyEntity, company => company.user)
  // companies: CompanyEntity[];

  // @OneToMany(() => UserRoleEntity, userRoleEntity => userRoleEntity.user)
  // userRoles: UserRoleEntity[];
}