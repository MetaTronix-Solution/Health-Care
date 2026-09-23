import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { BlogCategory } from '../schemas/blog.schema';

export class UpdateBlogDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(200)
  title?: string;

  @IsEnum(BlogCategory, {
    message:
      'category must be one of: Clinical Insights, Product Updates, Company News',
  })
  @IsOptional()
  category?: BlogCategory;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(500)
  excerpt?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  content?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  isPublished?: boolean;
}
