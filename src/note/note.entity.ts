import { Tag } from 'src/tag/tag.entity';
import { Base } from 'src/utils/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity('notes')
export class Note extends Base {
    @Column('note')
    note: string;

    @ManyToMany('tag', (t: Tag) => t.id)
    tag: Tag;
}
