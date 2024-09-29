import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { RoleEntity } from './role.entity';

@Entity()
export class UserRoleEntity {
  @PrimaryGeneratedColumn({
    name: 'UserRoleId'
  })
  id: number;

  // @ManyToOne(() => UserEntity, user => user.userRoles)
  // @JoinColumn({ name: 'user_id' })
  // user: UserEntity;

  // @ManyToOne(() => RoleEntity, role => role.userRoles)
  // @JoinColumn({ name: 'role_id' })
  // role: RoleEntity;
  
}