import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagsService } from './tag.service';

@Controller()
export class TagsController {
    constructor(private tagsService: TagsService) {}

    @Get('/allTags')
    getAllTags() {
        return this.tagsService.findAll();
    }

    @Post('/tag')
    createNewTag(@Body() tag: Tag) {
        return this.tagsService.create(tag);
    }

    @Delete('/tag')
    deleteTagById(@Query('id') id: number) {
        return this.tagsService.remove(id);
    }
}
