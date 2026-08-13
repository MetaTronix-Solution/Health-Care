import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UpdateProductDto {

  @IsOptional()
  @IsString()
  name?: string;


  @IsOptional()
  @IsString()
  description?: string;


  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;


  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(0)
  stock?: number;
}