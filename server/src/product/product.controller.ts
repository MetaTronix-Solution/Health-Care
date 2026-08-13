import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) {}

  // CREATE PRODUCT
  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 10),
  )
  async create(
    @Body() createProductDto: CreateProductDto,

    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.productService.create(
      createProductDto,
      files,
    );
  }
}