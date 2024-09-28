import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { ServiceEntity } from './service.entity';

@Entity()
export class ReserveEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'Date',
    type: 'timestamp',
    nullable: false,
    // default: () => 'CURRENT_TIMESTAMP',
  })
  date: Date;

  @Column({
    name: 'Status',
    type: 'varchar',
    length: 100,
    nullable: false,
    default: 'Pendiente'
  })
  status: string;

  // @ManyToOne(() => UserEntity)
  // @JoinColumn({ name: 'user_id' })
  // user: UserEntity;

  // @ManyToOne(() => ServiceEntity)
  // @JoinColumn({ name: 'service_id' })
  // service: ServiceEntity;
}