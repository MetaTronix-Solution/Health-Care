import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { SpecificationDto } from './specification.dto';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  category!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  manufacturer!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  shortDescription!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(0)
  price!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(0)
  stock!: number;

  // Arrives from multipart/form-data as a JSON string, e.g.
  // fd.append("specifications", JSON.stringify([{ label, value }]))
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
    return value;
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpecificationDto)
  @IsOptional()
  specifications?: SpecificationDto[];

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  isPublished?: boolean;
}
