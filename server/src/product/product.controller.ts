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
import { UpdateProductDto } from './dto/update-product.dto';

import { AdminAuthGuard } from '../auth/guards/admin-auth.guard';


@Controller('products')
export class ProductController {

  constructor(
    private readonly productService: ProductService,
  ) {}


  // ==========================================
  // CREATE PRODUCT - ADMIN ONLY
  // ==========================================

  @Post()
  @UseGuards(AdminAuthGuard)
  @UseInterceptors(
    FilesInterceptor('images', 10),
  )
  async create(
    @Body()
    createProductDto: CreateProductDto,

    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.productService.create(
      createProductDto,
      files,
    );
  }


  // ==========================================
  // GET ALL PRODUCTS - PUBLIC
  // ==========================================

  @Get()
  async findAll() {
    return this.productService.findAll();
  }


  // ==========================================
  // GET PRODUCT BY ID - PUBLIC
  // ==========================================

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ) {
    return this.productService.findOne(id);
  }


  // ==========================================
  // UPDATE PRODUCT - ADMIN ONLY
  // ==========================================

  @Patch(':id')
  @UseGuards(AdminAuthGuard)
  @UseInterceptors(
    FilesInterceptor('images', 10),
  )
  async updateProduct(
    @Param('id')
    id: string,

    @Body()
    updateProductDto: UpdateProductDto,

    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.productService.updateProduct(
      id,
      updateProductDto,
      files,
    );
  }


  // ==========================================
  // DELETE PRODUCT - ADMIN ONLY
  // ==========================================

  @Delete(':id')
  @UseGuards(AdminAuthGuard)
  async deleteProduct(
    @Param('id')
    id: string,
  ) {
    return this.productService.deleteProduct(
      id,
    );
  }
}