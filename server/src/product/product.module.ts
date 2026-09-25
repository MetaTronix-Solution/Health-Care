import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schemas/product.schema';
import {
  ProductViewLog,
  ProductViewLogSchema,
} from './schemas/product-view-log.schema';
import { AuthModule } from '../auth/auth.module';
import { ImagekitModule } from '../imagekit/imagekit.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: ProductViewLog.name, schema: ProductViewLogSchema },
    ]),
    AuthModule,
    ImagekitModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [MongooseModule],
})
export class ProductModule {}
