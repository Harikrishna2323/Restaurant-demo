import { Orders } from './Orders';
import {Column, Entity, JoinTable, ManyToOne, OneToMany,JoinColumn} from "typeorm";
import ParentEntity from "./ParentEntity";


export enum Categories {
    INDIAN = "indian",
    CHINEESE = "chineese",
    CONTINENTAL = "continental",
}

@Entity()
export class Dishes extends ParentEntity {
    @Column({type: "varchar", length: 40, nullable: false}) title: string;

    @Column({type: "varchar", length: 500, nullable: false}) description: string;

    @Column({type: "enum"}) category: Categories;

    @Column({type: "int"}) price: number;

    @Column({type: "boolean"}) available: boolean;

    @Column({type: "int", default: 1}) quantity: number;

    // @OneToMany(() => Image, (img) => img.dish)
    // images: Image[];

    @ManyToOne(() => Orders, (order) => order.id)
    @JoinColumn({ name: "id" })
    order: Orders;
}