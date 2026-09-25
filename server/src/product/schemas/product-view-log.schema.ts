import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProductViewLogDocument = HydratedDocument<ProductViewLog>;

@Schema({ timestamps: { createdAt: 'viewedAt', updatedAt: false } })
export class ProductViewLog {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true, index: true })
  product!: Types.ObjectId;

  viewedAt!: Date; // populated automatically by timestamps option above
}

export const ProductViewLogSchema =
  SchemaFactory.createForClass(ProductViewLog);
