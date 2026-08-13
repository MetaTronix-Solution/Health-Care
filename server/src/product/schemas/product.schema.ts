import {Prop,Schema,SchemaFactory,} from '@nestjs/mongoose';
import {HydratedDocument,} from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({
  timestamps: true,
})
export class Product {

  // PRODUCT NAME
  @Prop({
    required: true,
    trim: true,
  })
  name!: string;


  // DESCRIPTION
  @Prop({
    required: true,
    trim: true,
  })
  description!: string;



  // PRICE
  @Prop({
    required: true,
    min: 0,
  })
  price!: number;



  // STOCK
  @Prop({
    required: true,
    default: 0,
    min: 0,
  })
  stock!: number;



  // IMAGES
  @Prop({
    type: [
      {
        url: {
          type: String,
          required: true,
        },

        fileId: {
          type: String,
          required: true,
        },

        name: {
          type: String,
          required: true,
        },
      },
    ],

    default: [],
  })
  images!: {
    url: string;
    fileId: string;
    name: string;
  }[];

}

export const ProductSchema = SchemaFactory.createForClass(Product);