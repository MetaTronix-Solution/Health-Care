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


  // get all products
  @Get()
  async findAll() {
    return this.productService.findAll();
  }


  //get products by id
  @Get(":id")
  async findOne(
    @Param("id") id: string,
  ) {
    return this.productService.findOne(id);
  }


  //update product
  @Patch(":id")
  @UseInterceptors(FilesInterceptor("images", 10))
  async updateProduct(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.productService.updateProduct(id, updateProductDto, files)
  }

  @Delete(':id')
  async deleteProduct(
  @Param('id') id: string,
  ) {
  return this.productService.deleteProduct(id);
}
}