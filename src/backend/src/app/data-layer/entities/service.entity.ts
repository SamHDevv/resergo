import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ReserveEntity } from './reserve.entity';

@Entity()
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'Name',
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false
  })
  name: string;

  @Column({
    name: 'Duration',
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false
  })
  duration: string;


  // TODO: Make sure that the price is a decimal with 2 decimal places or a float
  
  @Column({
    name: 'Price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    unique: false,
    nullable: false
  })
  price: number;

  @Column({
    name: 'Description',
    type: 'varchar',
    length: 100,
    unique: false,
    nullable: false
  })
  description: string;

  @Column({
    name: 'Category',
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false
  })
  category: string;

  @Column({
    name: 'Image',
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: false
  })
  image: string;

  @Column({
    name: 'Available',
    type: 'int',
    unique: false,
    nullable: false
  })
  available: number;

  @Column({ 
    name: 'Active', 
    default: true,
    type: 'boolean',
    unique: false,
    nullable: false
  })
  active: boolean;

  // @OneToMany(() => ReserveEntity, reserve => reserve.service)
  // reserves: ReserveEntity[];
}