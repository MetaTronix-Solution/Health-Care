import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { BlogService } from './blog.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import 'multer';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { AdminAuthGuard } from 'src/auth/guards/admin-auth.guard';

@Controller('blog')
export class BlogController {
    constructor(
        private readonly blogService: BlogService
    ) {}

    //create blog
    @Post()
    @UseGuards(AdminAuthGuard)
    @UseInterceptors(FileInterceptor("image"))

    async create(
        @Body() createBlogDto: CreateBlogDto,
import { FindBlogsDto } from './dto/find-blogs.dto';
import { AdminAuthGuard } from '../auth/guards/admin-auth.guard';
import { ImagekitService } from '../imagekit/imagekit.service';

@Controller('blog')
export class BlogController {
  constructor(
    private readonly blogService: BlogService,
    private readonly imagekitService: ImagekitService,
  ) {}

  // ADMIN ROUTES

  @UseGuards(AdminAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() dto: CreateBlogDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const uploaded = await this.imagekitService.uploadFile(file, 'blog');
    return this.blogService.create(dto, uploaded);
  }

  @UseGuards(AdminAuthGuard)
  @Get('admin')
  async findAllForAdmin(@Query() query: FindBlogsDto) {
    return this.blogService.findAllForAdmin(query);
  }

  @UseGuards(AdminAuthGuard)
  @Get('admin/:id')
  async findOneForAdmin(@Param('id') id: string) {
    return this.blogService.findOneForAdmin(id);
  }

  @UseGuards(AdminAuthGuard)
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateBlogDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    const uploaded = file
      ? await this.imagekitService.uploadFile(file, 'blog')
      : undefined;
    return this.blogService.update(id, dto, uploaded);
  }

  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.blogService.remove(id);
  }

    // update blog
    @Patch(":id")
    @UseGuards(AdminAuthGuard)
    @UseInterceptors(FileInterceptor("image"))
    async update(
        @Param("id") id: string,
        @Body() updateBlogDto: UpdateBlogDto,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        return this.blogService.update(id, updateBlogDto, file)
    }
  // PUBLIC ROUTES

  @Get()
  async findPublished(@Query() query: FindBlogsDto) {
    return this.blogService.findPublished(query);
  }

    //delete blog
    @Delete(":id")
    @UseGuards(AdminAuthGuard)
    async deleteBlog(
        @Param("id") id: string,
    ) {
        return this.blogService.deleteBlog(id);
    }
  @Get(':slug')
  async findPublishedBySlug(@Param('slug') slug: string) {
    return this.blogService.findPublishedBySlug(slug);
  }
}
