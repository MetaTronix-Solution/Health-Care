import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

export enum BlogCategory {
  CLINICAL_INSIGHTS = 'Clinical Insights',
  PRODUCT_UPDATES = 'Product Updates',
  COMPANY_NEWS = 'Company News',
}

@Schema({
  timestamps: true,
})
export class Blog {
  // Blog title
  @Prop({
    required: true,
    trim: true,
  })
  title!: string;

  // Unique URL slug
  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  })
  slug!: string;

  // Blog category
  @Prop({
    type: String,
    enum: BlogCategory,
    required: true,
    index: true,
  })
  category!: BlogCategory;

  // ImageKit image URL
  @Prop({
    required: true,
  })
  image!: string;

  // ImageKit file ID
  @Prop({
    required: true,
  })
  imageFileId!: string;

  // Short description
  @Prop({
    required: true,
    trim: true,
  })
  excerpt!: string;

  // Full blog content
  @Prop({
    required: true,
  })
  content!: string;

  // Author
  @Prop({
    default: 'Healthcare Team',
    trim: true,
  })
  author!: string;

  // Published status
  @Prop({
    default: true,
  })
  isPublished!: boolean;

  // Publication date
  @Prop({
    default: null,
    type: Date,
  })
  publishedAt?: Date | null;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
