import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ImagekitModule } from 'src/imagekit/imagekit.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Product.name,
                schema: ProductSchema
            }
        ]),
        ImagekitModule
    ],

    providers: [ProductService],

    controllers: [ProductController],

})
export class ProductModule {}
