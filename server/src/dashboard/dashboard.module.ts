import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Product, ProductSchema } from '../product/schemas/product.schema';
import {
  ProductViewLog,
  ProductViewLogSchema,
} from '../product/schemas/product-view-log.schema';
import { Contact, ContactSchema } from '../contact/schemas/contact.schema';
import { AuthModule } from '../auth/auth.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: ProductViewLog.name, schema: ProductViewLogSchema },
      { name: Contact.name, schema: ContactSchema },
    ]),
    AuthModule,
    ProductModule, // gives access to ProductService for findTopPerforming
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
