import { Base } from 'src/utils/base';
import { Column } from 'typeorm';

export class Tag extends Base {
  @Column('title')
  title: string;

  @Column('description')
  description?: string;
}
