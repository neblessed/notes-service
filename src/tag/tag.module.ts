import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsController } from './tag.controller';
import { Tag } from './tag.entity';
import { TagsService } from './tag.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tag])],
    providers: [TagsService],
    controllers: [TagsController]
})
export class TagsModule {}
