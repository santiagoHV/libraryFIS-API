import { Publication } from "src/publications/entities/publication.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";

@Entity()
export class File{

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    documentLink: string

    @OneToOne(() => Publication, (publication) => publication.file )
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