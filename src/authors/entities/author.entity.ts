import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn, 
    UpdateDateColumn,
    OneToMany,
} from "typeorm";

import { Publication } from "src/publications/entities/publication.entity";

@Entity()
export class Author{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({length: 100})
    name: string;

    @Column({default: null})
    email: string;

    @Column({default: null})
    phone: string;

    @Column({default: true})
    alive: boolean;

    @Column({default: null})
    address: string

    @OneToMany(() => Publication, publication => publication.author)
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