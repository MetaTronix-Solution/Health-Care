import {BadRequestException, Injectable, InternalServerErrorException, NotFoundException,} from '@nestjs/common';
import {InjectModel,} from '@nestjs/mongoose';
import {Model, Types,} from 'mongoose';
import {Product,ProductDocument,} from './schemas/product.schema';
import {CreateProductDto,} from './dto/create-product.dto';
import {ImagekitService,} from '../imagekit/imagekit.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { url } from 'inspector';


@Injectable()
export class ProductService {
  constructor(
  @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    private readonly imagekitService: ImagekitService,
  ) {}


  // CREATE PRODUCT
  async create(
    createProductDto: CreateProductDto,
    files: Express.Multer.File[],
  ) {

    // UPLOAD IMAGES
    const images: {
      url: string;
      fileId: string;
      name: string;
    }[] = [];

    for (const file of files) {
      const uploaded =
        await this.imagekitService.uploadFile(
          file,
          '/healthcare/products',
        );
      images.push({
        url: uploaded.url,
        fileId: uploaded.fileId,
        name: uploaded.name,
      });
    }

    // CREATE PRODUCT
    const product =
      await this.productModel.create({
        name: createProductDto.name,
        description: createProductDto.description,
        price: createProductDto.price,
        stock: createProductDto.stock,
        images,
      });

    // RESPONSE
    return {
      message: 'Product created successfully',
      product,
    };
  }


  //Get all products
  async findAll() {
    const products = await this.productModel.find().sort({createdAr: -1}).exec();

    if(!products) {
      throw new NotFoundException("Products are not available");
    }

    return {
      success: true,
      message: "Products fetched successfully",
      count: products.length,
      products
    }
  }


  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();

    if(!product) {
      throw new NotFoundException("Product not found");
    }
    return {
      success: true,
      message: "Product fetched successfully",
      product
    }
  }


  //Update Product
  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
    files?: Express.Multer.File[],
  ) {

    //validate id
    if(!Types.ObjectId.isValid(id)) {
        throw new BadRequestException("Invalid product ID")
    }

    //Find Product
    const product = await this.productModel.findById(id).exec();

    if(!product) {
      throw new BadRequestException("Product Not Found")
    }

    //update basic info
    if(updateProductDto.name !== undefined) {
      product.name = updateProductDto.name;
    }

    if(updateProductDto.description !== undefined) {
      product.description = updateProductDto.description;
    }

    if(updateProductDto.price !== undefined) {
      product.price = updateProductDto.price;
    }

    if(updateProductDto.stock !== undefined) {
      product.stock = updateProductDto.stock
    }

    //upload new image
    if(files && files.length > 0) {
      const uploadedImages: {
      url: string;
      fileId: string;
      name: string;
      }[] = [];

      for(const file of files) {
        const uploaded = await this.imagekitService.uploadFile(file, "healthcare/products");

        uploadedImages.push({
          url: uploaded.url,
          fileId: uploaded.fileId,
          name: uploaded.name
        });
      }

      //add new image
      product.images.push(
        ...uploadedImages
      )
    }

    const updateProduct = await product.save();

    return {
      message: "Product updated successfully",
      product: updateProduct
    }
  }


  //delete Product
  async deleteProduct(id: string) {
    //validate product id
    if(!Types.ObjectId.isValid(id)) {
      throw new BadRequestException("Invalid product id")
    }

    //find product
    const product = await this.productModel.findById(id).exec();

    if(!product) {
      throw new NotFoundException("Product not found")
    }

    //delete all images from the iamgekit
    for (const image of product.images) {
    if (image.fileId) {
      try {
        await this.imagekitService.deleteFile(
          image.fileId,
        );
      } catch (error) {
        throw new InternalServerErrorException(
          'Failed to delete product images',
        );
      }
    }
  }

  //delete product from mongodb
  await this.productModel.findByIdAndDelete(id).exec();

  return {
    success: true,
    message: "Product and all associated images deleted successfully",
  }

  }
}