import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import {
  ProductViewLog,
  ProductViewLogDocument,
} from './schemas/product-view-log.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindProductsDto } from './dto/find-products.dto';
import { ImagekitService } from '../imagekit/imagekit.service';

type UploadedImage = { url: string; fileId: string; name: string };

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    @InjectModel(ProductViewLog.name)
    private readonly productViewLogModel: Model<ProductViewLogDocument>,
    private readonly imagekitService: ImagekitService,
  ) {}

  // Slug helper

  private slugify(name: string) {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private async generateUniqueSlug(name: string, excludeId?: string) {
    const base = this.slugify(name);
    let slug = base;
    let counter = 1;

    while (
      await this.productModel.exists({
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

  async create(dto: CreateProductDto, images: UploadedImage[]) {
    try {
      const slug = await this.generateUniqueSlug(dto.name);

      const product = await this.productModel.create({
        ...dto,
        slug,
        images,
      });

      return product;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Failed to create product');
    }
  }

  // Admin — list everything

  async findAllForAdmin(query: FindProductsDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const filter: Record<string, any> = {};

    if (query.category) {
      filter.category = query.category;
    }

    if (query.search) {
      const regex = new RegExp(query.search.trim(), 'i');
      filter.$or = [
        { name: regex },
        { manufacturer: regex },
        { shortDescription: regex },
      ];
    }

    const [items, total] = await Promise.all([
      this.productModel
        .find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      this.productModel.countDocuments(filter),
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
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  // Admin — update

  async update(id: string, dto: UpdateProductDto, newImages?: UploadedImage[]) {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (dto.name && dto.name !== product.name) {
      product.slug = await this.generateUniqueSlug(dto.name, id);
    }

    const { specifications, removedSpecificationIds, ...rest } = dto;
    Object.assign(product, rest);

    if (specifications) {
      type SpecEntry = { _id?: string; label: string; value: string };

      const existingById = new Map<string, SpecEntry>(
        product.specifications.map((s: any) => [String(s._id), s]),
      );
      const removedIds = new Set(removedSpecificationIds ?? []);

      const merged: SpecEntry[] = [];
      for (const spec of specifications) {
        if (spec._id && existingById.has(spec._id)) {
          const existing = existingById.get(spec._id)!;
          existing.label = spec.label;
          existing.value = spec.value;
          merged.push(existing);
          existingById.delete(spec._id);
        } else {
          merged.push({ label: spec.label, value: spec.value });
        }
      }

      for (const [existingId, existing] of existingById) {
        if (!removedIds.has(existingId)) {
          merged.push(existing);
        }
      }

      product.specifications = merged as any;
    }

    if (newImages && newImages.length > 0) {
      product.images = [...product.images, ...newImages];
    }

    await product.save();
    return product;
  }

  // Admin — remove a single image from a product

  async removeImage(id: string, fileId: string) {
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const image = product.images.find((img) => img.fileId === fileId);
    if (!image) {
      throw new NotFoundException('Image not found on this product');
    }

    product.images = product.images.filter((img) => img.fileId !== fileId);
    await product.save();

    await this.imagekitService.deleteFile(fileId).catch(() => {});

    return product;
  }

  // Admin — delete

  async remove(id: string) {
    const product = await this.productModel.findByIdAndDelete(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // best-effort cleanup of all associated images in ImageKit
    await Promise.all(
      product.images.map((img) =>
        this.imagekitService.deleteFile(img.fileId).catch(() => {}),
      ),
    );

    return { success: true, message: 'Product deleted' };
  }

  // Admin — top performing (dashboard widget)

  async findTopPerforming(limit = 5) {
    return this.productModel
      .find({ isPublished: true })
      .sort({ views: -1 })
      .limit(limit);
  }

  // Public — list published only

  async findPublished(query: FindProductsDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 12;

    const filter: Record<string, any> = { isPublished: true };

    if (query.category) {
      filter.category = query.category;
    }

    if (query.search) {
      const regex = new RegExp(query.search.trim(), 'i');
      filter.$or = [
        { name: regex },
        { manufacturer: regex },
        { shortDescription: regex },
      ];
    }

    const [items, total] = await Promise.all([
      this.productModel
        .find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      this.productModel.countDocuments(filter),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.max(1, Math.ceil(total / limit)),
    };
  }

  // Public — single, by slug (increments views)

  async findPublishedBySlug(slug: string) {
    const product = await this.productModel.findOneAndUpdate(
      { slug, isPublished: true },
      { $inc: { views: 1 } },
      { new: true },
    );

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // fire-and-forget log entry for the daily chart; don't block the response on it
    this.productViewLogModel.create({ product: product._id }).catch(() => {});

    return product;
  }
}
