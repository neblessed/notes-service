import { Tag } from 'src/tag/tag.entity';
import { Base } from 'src/utils/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('notes')
export class Note extends Base {
    @Column({ name: 'note', type: 'varchar', length: 100 })
    note: string;

    @ManyToOne(() => Tag, (tag: Tag) => tag.id)
    tag: Tag;
}
