import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminModule } from 'src/admin/admin.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    AdminModule,

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("JWT_ACCESS_SECRET"),

        signOptions: {
          expiresIn: "15m"
        }
      })
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
