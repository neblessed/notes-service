import { Controller, Get } from '@nestjs/common';
import { TagsService } from './tag.service';

@Controller()
export class TagsController {
    constructor(private tagsService: TagsService) {}

    @Get('/tags')
    getAllTags() {
        return this.tagsService.findAll();
    }
}
