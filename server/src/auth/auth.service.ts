import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import * as bcrypt from 'bcryptjs';

import { AdminService } from '../admin/admin.service';
import { AdminLoginDto } from './dto/admin-login.dto';



@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,

    private readonly jwtService: JwtService,

    private readonly configService: ConfigService,
  ) {}

  async login(adminLoginDto: AdminLoginDto) {
    const { email, password } = adminLoginDto;

    // Find admin
    const admin =
      await this.adminService.findByEmail(email);

    if (!admin) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    // Check if admin is active
    if (!admin.isActive) {
      throw new UnauthorizedException(
        'Admin account is inactive',
      );
    }

    // Check password
    const passwordMatched =
      await bcrypt.compare(
        password,
        admin.password,
      );

    if (!passwordMatched) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    // Generate tokens
    const tokens =
      await this.generateTokens(
        admin._id.toString(),
        admin.email,
      );

    // Hash refresh token
    const hashedRefreshToken =
      await bcrypt.hash(
        tokens.refreshToken,
        10,
      );

    // Save refresh token
    await this.adminService.updateRefreshToken(
      admin._id.toString(),
      hashedRefreshToken,
    );

    return {
      message: 'Login successful',

      accessToken: tokens.accessToken,

      refreshToken: tokens.refreshToken,

      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    };
  }

  private async generateTokens(
    adminId: string,
    email: string,
  ) {
    const payload = {
      sub: adminId,
      email: email,
    };

    const accessToken =
      await this.jwtService.signAsync(
        payload,
        {
          secret:
            this.configService.get<string>(
              'JWT_ACCESS_SECRET',
            ),

          expiresIn: '15m',
        },
      );

    const refreshToken =
      await this.jwtService.signAsync(
        payload,
        {
          secret:
            this.configService.get<string>(
              'JWT_REFRESH_SECRET',
            ),

          expiresIn: '7d',
        },
      );

    return {
      accessToken,
      refreshToken,
    };
  }
}