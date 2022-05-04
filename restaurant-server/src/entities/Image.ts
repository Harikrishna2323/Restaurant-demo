import {Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany } from "typeorm";
import ParentEntity from "./ParentEntity";
import { Dishes } from "./Dishes";

export class Image extends ParentEntity{
    
    @Column({type: "varchar", length: 100, nullable: false}) imagePath: string;

    @ManyToOne(() => Dishes, dish => dish.images)
    @JoinColumn({name: "id"})
    dish: Dishes

}