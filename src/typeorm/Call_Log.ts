import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Call_Log{
    @PrimaryGeneratedColumn()
    contact_id: number;

    @Column({length: 25})
    Name: string;
    
    @Column("bigint")
    Phone_number: number;

    @Column({default:'incoming'})
    Call_type: string;

    @Column({
        name: 'Timestamp',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
      })
    Timestamp: Date;

    @Column("float")
    Duration: number;
}