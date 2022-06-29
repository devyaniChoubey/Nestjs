import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Call_Log{
    @PrimaryGeneratedColumn()
    contact_id: number;

    @Column({length: 25})
    Name: string;
    
    @Column()
    Phone_number: number;

    @Column()
    Call_type: string;

    // @Column()
    // Duration: Float32Array;

    @Column({
        type: 'datetime',
        nullable:true
    })
    time: string;
    
}