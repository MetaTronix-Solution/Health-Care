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
import { UpdateBlogDto } from './dto/update-blog.dto';

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


  //update blog
  async update(id: string, updateBlogDto: UpdateBlogDto, file?: Express.Multer.File) {

    //Validate Mongo id
    if(!Types.ObjectId.isValid(id)) {
      throw new BadRequestException("Invalid blog ID")
    }

    //find Existing blog
    const blog = await this.blogModel.findById(id).exec();
    if(!blog) {
      throw new BadRequestException("Blog not found")
    }

    //update slug if title change
    if(updateBlogDto.title !== undefined &&
       updateBlogDto.title !== blog.title
    ) {
      const newSlug = this.generateSlug(updateBlogDto.title);


    //check duplicate slug
    const existingBlog = await this.blogModel.findOne({
      slug: newSlug,
      _id: {$ne: id}
    });

    if(existingBlog) {
      throw new BadRequestException("A blog with this title already exists")
    }
    blog.title = updateBlogDto.title;
    blog.slug = newSlug
  }

  //update basic fields
  if(updateBlogDto.category !== undefined) {
    blog.category = updateBlogDto.category;
  }

  if(updateBlogDto.excerpt !== undefined) {
    blog.excerpt = updateBlogDto.excerpt
  }

  if (
    updateBlogDto.content !== undefined
  ) {
    blog.content =
      updateBlogDto.content;
  }

  if (
    updateBlogDto.author !== undefined
  ) {
    blog.author =
      updateBlogDto.author;
  }



  // 5. Update published status


  if (
    updateBlogDto.isPublished !== undefined
  ) {

    blog.isPublished =
      updateBlogDto.isPublished;

    if (updateBlogDto.isPublished) {

      // Set published date when publishing
      if (!blog.publishedAt) {
        blog.publishedAt =
          new Date();
      }

    } else {

      // Remove published date
      blog.publishedAt = undefined;
    }
  }



  // 6. IMAGE UPDATE

  // IMPORTANT:
  // If no new image is provided,
  // DO NOTHING.
  //
  // Therefore the existing image
  // will NOT be uploaded again.


  if (file) {

    // Delete old ImageKit image
    if (blog.imageFileId) {

      await this.imagekitService
        .deleteFile(
          blog.imageFileId,
        );
    }


    // Upload new image
    const uploaded =
      await this.imagekitService.uploadFile(
        file,
        'healthcare/blog',
      );


    // Replace old image
    blog.image =
      uploaded.url;

    blog.imageFileId =
      uploaded.fileId;
  }



  // 7. Save updated blog


  const updatedBlog =
    await blog.save();



  // 8. Response


  return {
    success: true,

    message:
      'Blog updated successfully',

    blog: updatedBlog,


}
  }
}