import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from '../../business-services/entities/service.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Reserve {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  hour: string;

  @Column()
  status: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'service_id' })
  service: Service;
}