import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';


export class CreateProductDto {

  // PRODUCT NAME
  @IsString()
  @IsNotEmpty()
  name!: string;

  // DESCRIPTION
  @IsString()
  @IsNotEmpty()
  description!: string;

  // PRICE
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price!: number;
  // STOCK

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  stock!: number;

}