import { Dishes } from './Dishes';
import { Users } from './Users';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import ParentEntity from "./ParentEntity";

export enum OrderType {
    CASH="cash",
    UPI="upi"
}

export enum OrderStatus {
    PLACED = "PLACED",
    PAYED = "PAYED",
    ON_TRANSPORT = "ON_TRANSPORT",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED",
  }

@Entity({name: "Orders"})
export class Orders extends ParentEntity {

   @Column({
    type: "bigint",
    nullable: false
   }) totalPrice: number

   @Column({
    type: "enum",
    enum: OrderType,
    default: OrderType.CASH
   }) orderType: OrderType

   @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.PLACED
   }) orderStatus: OrderStatus

   @OneToMany(() => Dishes, dish => dish.order)
   Items: Dishes[];
   

   @ManyToOne(() => Users, user => user.id)
   @JoinColumn({name: "id"})
   user: Users

}