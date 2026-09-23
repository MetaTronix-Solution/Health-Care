import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument, BlogCategory } from './schemas/blog.schema';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { FindBlogsDto } from './dto/find-blogs.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name)
    private readonly blogModel: Model<BlogDocument>,
  ) {}

  // Slug helper

  private slugify(title: string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private async generateUniqueSlug(title: string, excludeId?: string) {
    const base = this.slugify(title);
    let slug = base;
    let counter = 1;

    while (
      await this.blogModel.exists({
        slug,
        ...(excludeId && { _id: { $ne: excludeId } }),
      })
    ) {
      slug = `${base}-${counter}`;
      counter++;
    }

    return slug;
  }

  // Admin — create

  async create(dto: CreateBlogDto, image: { url: string; fileId: string }) {
    try {
      const slug = await this.generateUniqueSlug(dto.title);

      const blog = await this.blogModel.create({
        ...dto,
        slug,
        image: image.url,
        imageFileId: image.fileId,
        publishedAt: dto.isPublished === false ? null : new Date(),
      });

      return blog;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Failed to create blog post');
    }
  }

  // Admin — list everything (draft + published)

  async findAllForAdmin(query: FindBlogsDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const filter: Record<string, any> = {};

    if (query.category) {
      filter.category = query.category;
    }

    if (query.search) {
      const regex = new RegExp(query.search.trim(), 'i');
      filter.$or = [{ title: regex }, { excerpt: regex }];
    }

    const [items, total] = await Promise.all([
      this.blogModel
        .find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      this.blogModel.countDocuments(filter),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.max(1, Math.ceil(total / limit)),
    };
  }

  // Admin — single, by id

  async findOneForAdmin(id: string) {
    const blog = await this.blogModel.findById(id);

    if (!blog) {
      throw new NotFoundException('Blog post not found');
    }

    return blog;
  }

  // Admin — update

  async update(
    id: string,
    dto: UpdateBlogDto,
    image?: { url: string; fileId: string },
  ) {
    const blog = await this.blogModel.findById(id);

    if (!blog) {
      throw new NotFoundException('Blog post not found');
    }

    if (dto.title && dto.title !== blog.title) {
      blog.slug = await this.generateUniqueSlug(dto.title, id);
    }

    Object.assign(blog, dto);

    if (image) {
      blog.image = image.url;
      blog.imageFileId = image.fileId;
    }

    // set publishedAt the first time a post goes live
    if (dto.isPublished === true && !blog.publishedAt) {
      blog.publishedAt = new Date();
    }

    await blog.save();
    return blog;
  }

  // Admin — delete

  async remove(id: string) {
    const blog = await this.blogModel.findByIdAndDelete(id);

    if (!blog) {
      throw new NotFoundException('Blog post not found');
    }

    return { success: true, message: 'Blog post deleted' };
    // Note: also delete blog.imageFileId from ImageKit here if you want
    // to avoid orphaned images — see note below.
  }

  // Public — list published only

  async findPublished(query: FindBlogsDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 9;

    const filter: Record<string, any> = { isPublished: true };

    if (query.category) {
      filter.category = query.category;
    }

    if (query.search) {
      const regex = new RegExp(query.search.trim(), 'i');
      filter.$or = [{ title: regex }, { excerpt: regex }];
    }

    const [items, total] = await Promise.all([
      this.blogModel
        .find(filter)
        .sort({ publishedAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      this.blogModel.countDocuments(filter),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.max(1, Math.ceil(total / limit)),
    };
  }

  // Public — single, by slug

  async findPublishedBySlug(slug: string) {
    const blog = await this.blogModel.findOne({ slug, isPublished: true });

    if (!blog) {
      throw new NotFoundException('Blog post not found');
    }

    return blog;
  }
}
