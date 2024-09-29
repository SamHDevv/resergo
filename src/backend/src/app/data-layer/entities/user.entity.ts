import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { CompanyEntity } from './company.entity';
import { UserRoleEntity } from './user-role.entity';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'UserId'
  })
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
    name: 'Email',
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false
  })
  email: string;

  @Column({
    name: 'Password',
    type: 'varchar',
    length: 100,
    unique: false,
    nullable: false
  })
  password: string;

  @Column({
    name: 'Phone',
    type: 'varchar',
    length: 15,
    unique: false,
    nullable: false
  })
  phone: string;

  @Column({ 
    name: 'Active',
    type: 'boolean',
    unique: false,
    nullable: false,
    default: true
  })
  active: boolean;

  // @OneToMany(() => CompanyEntity, company => company.user)
  // companies: CompanyEntity[];

  // @OneToMany(() => UserRoleEntity, userRoleEntity => userRoleEntity.user)
  // userRoles: UserRoleEntity[];
}