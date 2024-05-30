import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { TagsModule } from './tag/tag.module';

config();

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT,
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            // entities: ['src/**/*.entity.ts'],
            synchronize: true,
            autoLoadEntities: true
        }),
        TagsModule,
        NoteModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
