import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Publication } from "src/publications/entities/publication.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    lastname: string

    @Exclude()
    @Column()
    password: string

    @OneToMany(() => Publication, publication => publication.creator)
    publications: Publication[]

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date

    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date

}