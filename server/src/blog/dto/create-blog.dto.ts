import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';


export class CreateBlogDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title!: string;


  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  category!: string;


  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  excerpt!: string;


  @IsString()
  @IsNotEmpty()
  content!: string;


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