import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schemas/product.schema';
import { AuthModule } from '../auth/auth.module';
import { ImagekitModule } from '../imagekit/imagekit.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    AuthModule, // needed for AdminAuthGuard's JwtService dependency, same as ContactModule
    ImagekitModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [MongooseModule], // so DashboardModule can reuse the ProductViewLog model too
})
export class ProductModule {}
