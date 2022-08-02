import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Publication{

    @PrimaryGeneratedColumn()
    id: Number

    @Column({length: 100})
    name: string

    @Column()
    description: string

    @Column()
    type: string

    @Column({default: null})
    idISBN: string

    @Column({default: null})
    idSSN: string

    @Column({default: false})
    archived: boolean

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