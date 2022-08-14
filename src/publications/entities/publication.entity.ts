import {
    Entity,
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
    OneToMany
} from 'typeorm'

import { File } from 'src/files/entities/file.entity'
import { Author } from 'src/authors/entities/author.entity'
import { User } from 'src/users/entities/user.entity'

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

    @Column({default: false})
    inPhysical: boolean

    @Column({nullable: true, default: 0})
    stock: number

    @OneToOne(() => File, (file) => file.publication,  {nullable: true})
    @JoinColumn()
    file: File

    @ManyToOne(() => Author, author => author.publications, {nullable: true})
    author: Author

    @ManyToOne(() => User, user => user.publications)
    creator: User

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