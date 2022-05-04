import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    OneToOne,
    JoinColumn,
    ManyToOne,
    JoinTable,
  } from 'typeorm';
  import dateTransformer from '../utilities/ormHelper';
  import ParentEntity from './ParentEntity';
  import { Users } from './Users';
  
  @Entity({ name: 'UserRoles' })
  export class UserRoles extends ParentEntity {
    @Column({ type: 'varchar', length: '60', nullable: false }) roleName: string;
    @Column({ type: 'tinyint', unsigned: true, nullable: false, default: 1 })
    activeStatus: number;

    
    @OneToMany(() => Users, user => user.role, {
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT',
    })
    user: Users[];
  }
  