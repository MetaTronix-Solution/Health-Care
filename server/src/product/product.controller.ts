import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import 'multer';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindProductsDto } from './dto/find-products.dto';
import { AdminAuthGuard } from '../auth/guards/admin-auth.guard';
import { ImagekitService } from '../imagekit/imagekit.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly imagekitService: ImagekitService,
  ) {}

  // ADMIN ROUTES

  @UseGuards(AdminAuthGuard)
  @Post()
  @UseInterceptors(FilesInterceptor('images', 10)) // up to 10 images per product
  async create(
    @Body() dto: CreateProductDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const uploaded = await Promise.all(
      (files ?? []).map((file) =>
        this.imagekitService.uploadFile(file, 'products'),
      ),
    );
    return this.productService.create(dto, uploaded);
  }

  @UseGuards(AdminAuthGuard)
  @Get('admin')
  async findAllForAdmin(@Query() query: FindProductsDto) {
    return this.productService.findAllForAdmin(query);
  }

  @UseGuards(AdminAuthGuard)
  @Get('admin/:id')
  async findOneForAdmin(@Param('id') id: string) {
    return this.productService.findOneForAdmin(id);
  }

  @UseGuards(AdminAuthGuard)
  @Patch(':id')
  @UseInterceptors(FilesInterceptor('images', 10))
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
    @UploadedFiles() files?: Express.Multer.File[],
  ) {
    const uploaded = files?.length
      ? await Promise.all(
          files.map((file) =>
            this.imagekitService.uploadFile(file, 'products'),
          ),
        )
      : undefined;
    return this.productService.update(id, dto, uploaded);
  }

  @UseGuards(AdminAuthGuard)
  @Delete(':id/images/:fileId')
  async removeImage(@Param('id') id: string, @Param('fileId') fileId: string) {
    return this.productService.removeImage(id, fileId);
  }

  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  // PUBLIC ROUTES

  @Get()
  async findPublished(@Query() query: FindProductsDto) {
    return this.productService.findPublished(query);
  }

  @Get(':slug')
  async findPublishedBySlug(@Param('slug') slug: string) {
    return this.productService.findPublishedBySlug(slug);
  }
}
