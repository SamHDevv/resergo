import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserRoleEntity } from './user-role.entity';
@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // @OneToMany(() => UserRoleEntity, userRole => userRole.role)
  // userRoles: UserRoleEntity[];
}