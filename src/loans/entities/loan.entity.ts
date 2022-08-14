import { Publication } from "src/publications/entities/publication.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Loan{

    @PrimaryGeneratedColumn()
    id: number

    @Column({default: false})
    returned: boolean

    @Column({
        nullable: true,
        type: 'timestamptz'
    })
    returnDate: Date

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => Publication, publication => publication.loans)
    publication: Publication

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