import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BlogService } from './blog.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
    constructor(
        private readonly blogService: BlogService
    ) {}

    //create blog
    @Post()
    @UseInterceptors(FileInterceptor("image"))

    async create(
        @Body() createBlogDto: CreateBlogDto,

        @UploadedFile() file: Express.Multer.File
    ) {
        return this.blogService.create(createBlogDto, file)
    }

    //get all blogs
    @Get()
    async findAll() {
        return this.blogService.findAll();
    }


    // get by id
    @Get(":id")
    async findOne(
        @Param("id") id: string
    ) {
        return this.blogService.findOne(id)
    }


    // get by slug
    @Get("slug/:slug")
    async findBySlug(@Param("slug") slug: string) {
        return this.blogService.findBySlug(slug);
    }
}
