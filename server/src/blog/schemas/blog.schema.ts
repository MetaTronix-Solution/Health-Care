import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";






export type BlogDocument = HydratedDocument<Blog>;


@Schema({
    timestamps: true
})

export class Blog {
    @Prop({
        required: true,
        trim: true
    })
    title!: string;

    @Prop({
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    })
    slug!: string;

    @Prop({
        required: true,
        trim: true,
        index: true
    })
    category!: string;


    @Prop({
        required: true,
    })
    image!: string;

    @Prop({
        required: true,
    })
    imageField!: string;


    @Prop({
        required: true,
        trim: true
    })
    excerpt!: string;

    @Prop({
        required: true
    })
    content!: string;

    @Prop({
        default: "Healthcare Team",
        trim: true
    })
    author!: string;

    @Prop({
        default: true
    })
    isPublished!: boolean;

    @Prop({
        default: Date.now,
    })
    publishedAt!: Date;
}



export const BlogSchema = SchemaFactory.createForClass(Blog);