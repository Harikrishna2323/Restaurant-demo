import { Dishes } from './Dishes';
import { Orders } from './Orders';
import {Column, Entity, JoinTable, ManyToOne, OneToMany} from "typeorm";
import ParentEntity from "./ParentEntity";
import { UserRoles } from "./UserRoles";

@Entity({name: "Users"})
export class Users extends ParentEntity{
    @Column({type: "varchar", length: 60, nullable: false}) firstName: string;
    @Column({
        type: "varchar",
        length: 60,
        nullable: false
    }) lastName: string;

    @Column({type: "bigint", nullable: false, unsigned: true,name: "roleId"}) roleId: bigint

    @Column({
        type: "varchar",
        length: 45,
        nullable: false
    }) email: string;

    @Column({
        type: "varchar",
        length: 15,
        nullable: false
    }) phone: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: false
    }) password: string;



    @OneToMany(() => Orders, order => order.id)
    Order: Orders[]

    @OneToMany(() => Dishes, dish => dish.id)
    dishes: Dishes[]

    @ManyToOne(() => UserRoles, { onUpdate: "RESTRICT", onDelete: "RESTRICT" })
    @JoinTable({name: "roleId"}) role: UserRoles

    
}