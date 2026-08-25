import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';


export class UpdateBlogDto {

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(200)
  title?: string;


  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(100)
  category?: string;


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