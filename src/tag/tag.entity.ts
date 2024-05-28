import { Column, Entity } from 'typeorm';
import { Base } from '../utils/base.entity';

@Entity('tags')
export class Tag extends Base {
    @Column({ name: 'title', type: 'varchar', length: 20 })
    title: string;

    @Column({ name: 'description', type: 'varchar', length: 100 })
    description: string;
}
