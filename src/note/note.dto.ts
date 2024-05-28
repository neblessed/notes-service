import { Tag } from 'src/tag/tag.dto';
import { Base } from 'src/utils/base';
import { Column, ManyToMany } from 'typeorm';

export class NoteEntity extends Base {
  @Column('note')
  note: string;

  @ManyToMany('tag', (t: Tag) => t.id)
  tag: Tag;
}
