import { Controller, Get, HttpCode } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller()
export class NoteController {
    constructor(private noteService: NoteService) {}

    @Get('/allNotes')
    @HttpCode(200)
    getAllTags() {
        return this.noteService.findAll();
    }
}
