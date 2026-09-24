import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class SpecificationDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  label!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  value!: string;
}
