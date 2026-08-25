import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';

import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { ImagekitModule } from './imagekit/imagekit.module';
import { ProductModule } from './product/product.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],

      inject: [ConfigService],

      useFactory: ( configService: ConfigService ) => ({
        uri: configService.get<string>(
          'MONGO_URI',
        ),
      }),
    }),

    AdminModule,

    AuthModule,

    ContactModule,

    ImagekitModule,

    ProductModule,

    BlogModule,
  ],
})
export class AppModule {}