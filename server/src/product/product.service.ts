import {Injectable, NotFoundException,} from '@nestjs/common';
import {InjectModel,} from '@nestjs/mongoose';
import {Model,} from 'mongoose';
import {Product,ProductDocument,} from './schemas/product.schema';
import {CreateProductDto,} from './dto/create-product.dto';
import {ImagekitService,} from '../imagekit/imagekit.service';


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
}