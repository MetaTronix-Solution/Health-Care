import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import {
  Blog,
  BlogDocument,
} from './schemas/blog.schema';

import { Model, Types } from 'mongoose';

import { ImagekitService } from 'src/imagekit/imagekit.service';

import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {

  constructor(

    @InjectModel(Blog.name)
    private readonly blogModel: Model<BlogDocument>,

    private readonly imagekitService: ImagekitService,

  ) {}

  // GENERATE SLUG

  private generateSlug(title: string): string {

    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

  }


  // CREATE BLOG
  async create(
    createBlogDto: CreateBlogDto,
    file: Express.Multer.File,
  ) {


    // 1. Check image
    if (!file) {

      throw new BadRequestException(
        'Blog image is required',
      );

    }


    // 2. Generate slug

    const slug =
      this.generateSlug(
        createBlogDto.title,
      );



    // 3. Check duplicate slug
    const existingBlog =
      await this.blogModel.findOne({
        slug,
      }).exec();


    if (existingBlog) {

      throw new BadRequestException(
        'A blog with this title already exists',
      );

    }

    // 4. Upload image to ImageKit
    const uploaded =
      await this.imagekitService.uploadFile(
        file,
        'healthcare/blog',
      );



    // 5. Determine publish status

    const isPublished =
      createBlogDto.isPublished ?? true;



    // 6. Create blog
    const blog =
      await this.blogModel.create({

        title:
          createBlogDto.title,

        slug,

        category:
          createBlogDto.category,

        image:
          uploaded.url,

        imageFileId:
          uploaded.fileId,

        excerpt:
          createBlogDto.excerpt,

        content:
          createBlogDto.content,

        author:
          createBlogDto.author ||
          'Healthcare Team',

        isPublished,

        publishedAt:
          isPublished
            ? new Date()
            : null,

      });


    // 7. Response
    return {
      success: true,
      message:
        'Blog created successfully',
      blog,
    };
  }


  //Get all blogs

  async findAll() {
    const blogs = await this.blogModel.find().sort({
      createdAt: -1
    })
    .exec();

    return {
      success: true,
      count: blogs.length,
      blogs
    }
  }


  //get by id
  async findOne(id: string) {

    //validate MongoDb ID
    if(!Types.ObjectId.isValid(id)) {
      throw new BadRequestException("Invalid blog ID")
    }

    //Find Blog
    const blog = await this.blogModel.findById(id).exec();

    //blog not found
    if(!blog) {
      throw new BadRequestException("Blog not found")
    }

    return {
      success: true,
      blog
    }

  }

  //get by slug
  async findBySlug(slug: string) {

    //Find blog using slug
    const blog = await this.blogModel.findOne({slug: slug.toLowerCase()}).exec();


    //blog not found
    if(!blog) {
      throw new BadRequestException("Blog not found")
    }

    return {
      success: true,
      blog
    }
  }

}