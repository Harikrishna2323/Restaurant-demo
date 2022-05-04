import { BaseEntity, Entity, PrimaryGeneratedColumn, CreateDateColumn , UpdateDateColumn, DeleteDateColumn, Column } from "typeorm";

@Entity()
export default abstract class ParentEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ unsigned: true, type: "bigint" }) id: bigint;

    @CreateDateColumn() createdAt: Date;

    @UpdateDateColumn() updatedAt: Date;

    @DeleteDateColumn() deletedAt: Date;

    @Column({ nullable: true, type: "varchar", length: "12" })
    createdByUId: string;

    @Column({ nullable: true, type: "varchar", length: "12" })
    modifiedByUId: string;
}