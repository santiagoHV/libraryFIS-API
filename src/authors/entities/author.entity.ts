import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Author{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({length: 100})
    name: string;

    @Column({default: null})
    email: boolean;

    @Column({default: null})
    phone: boolean;

    @Column({default: true})
    alive: boolean;

    @Column({default: null})
    address: string
}