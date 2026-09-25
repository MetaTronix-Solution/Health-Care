import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class SpecificationDto {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  label!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  value!: string;
}
