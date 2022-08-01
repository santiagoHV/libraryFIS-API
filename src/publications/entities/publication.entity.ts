import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Publication{

    @PrimaryGeneratedColumn()
    id: Number

    @Column({length: 100})
    name: string

    @Column({default: false})
    archived: boolean
}