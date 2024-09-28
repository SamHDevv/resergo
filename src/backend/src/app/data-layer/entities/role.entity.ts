import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserRoleEntity } from './user-role.entity';
@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'Name',
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 100
  })
  name: string;

  @Column({
    name: 'Description',
    unique: false,
    nullable: false,
    type: 'varchar',
    length: 100
  })
  description: string;

  // @OneToMany(() => UserRoleEntity, userRole => userRole.role)
  // userRoles: UserRoleEntity[];
}