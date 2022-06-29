import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Contact{
    @PrimaryGeneratedColumn()
    contact_id:number;

    @Column({length: 25})
    Name: string;
    
    @Column()
    Phone: number;

    @Column()
    Address: string;

    @Column()
    Email: string;

    @Column()
    Notes: string;

}