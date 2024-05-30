import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note)
        private noteRepository: Repository<Note>
    ) {}

    findAll(): Promise<Note[]> {
        return this.noteRepository.find();
    }

    findOne(id: number): Promise<Note> {
        return this.noteRepository.findOneBy({ id });
    }

    async remove(id: number) {
        await this.noteRepository.delete(id);
    }

    async create(note: Note) {
        await this.noteRepository.save(note);
    }

    async update(id: number, note: Note) {
        await this.noteRepository.update(id, {
            note: note.note,
            tag: note.tag
        });
    }
}
