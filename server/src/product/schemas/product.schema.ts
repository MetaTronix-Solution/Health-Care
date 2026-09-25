import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, trim: true })
  name!: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  })
  slug!: string;

  @Prop({ required: true, trim: true, index: true })
  category!: string;

  @Prop({ required: true, trim: true })
  manufacturer!: string;

  @Prop({ required: true, trim: true, maxlength: 300 })
  shortDescription!: string;

  @Prop({ required: true, trim: true })
  description!: string;

  @Prop({ required: true, min: 0 })
  price!: number;

  @Prop({ required: true, default: 0, min: 0 })
  stock!: number;

  @Prop({
    type: [{ url: String, fileId: String, name: String }],
    default: [],
  })
  images!: { url: string; fileId: string; name: string }[];

  @Prop({
    type: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    default: [],
  })
  specifications!: { label: string; value: string }[];

  @Prop({ default: true })
  isPublished!: boolean;

  @Prop({ default: 0, min: 0 })
  views!: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
