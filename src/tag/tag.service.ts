import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private tagsRepository: Repository<Tag>
    ) {}

    findAll(): Promise<Tag[]> {
        return this.tagsRepository.find();
    }

    findOne(id: number): Promise<Tag> {
        return this.tagsRepository.findOneBy({ id });
    }

    async remove(id: number) {
        await this.tagsRepository.delete(id);
    }
}
