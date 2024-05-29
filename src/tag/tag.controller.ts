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
    async createNewTag(@Body() tag: Tag) {
        const { id, title } = tag;
        const tags = await this.tagsService.findAll();

        if (tags.map((tag) => tag.title).includes(title)) {
            return { message: 'This tag name already exists' };
        }

        if (tags.map((tag) => tag.id).includes(id)) {
            return {
                message: `Id: ${id} already exists. You may create tag without id then the id will create automatically`
            };
        }
        return this.tagsService.create(tag);
    }

    @Delete('/tag')
    async deleteTagById(@Query('id') id: number) {
        const tags = await this.tagsService.findAll();

        if (!tags.map((tag) => tag.id).includes(id)) {
            return {
                message: `Id: ${id} has not be found`
            };
        }
        return this.tagsService.remove(id);
    }
}
