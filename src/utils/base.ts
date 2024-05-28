import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Base {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @CreateDateColumn({ name: 'updated_at' })
    updated_at: Date;
}
