import { Base } from 'src/utils/base';
import { Column, Entity } from 'typeorm';

@Entity('tags')
export class Tag extends Base {
    @Column('title')
    title: string;

    @Column('description')
    description?: string;
}
