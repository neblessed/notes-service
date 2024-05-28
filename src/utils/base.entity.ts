import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';

export abstract class Base {
    @PrimaryGeneratedColumn()
    id: number;
}
