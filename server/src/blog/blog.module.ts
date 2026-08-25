import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './schemas/blog.schema';
import { ImagekitModule } from 'src/imagekit/imagekit.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Blog.name,
        schema: BlogSchema
      },
    ]),
    ImagekitModule,
    AuthModule
  ],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
