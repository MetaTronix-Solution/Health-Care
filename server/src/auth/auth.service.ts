import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { ConfigService } from '@nestjs/config';

import * as bcrypt from 'bcryptjs';

import { randomUUID } from 'crypto';

import { AdminService } from '../admin/admin.service';

import { AdminLoginDto } from './dto/admin-login.dto';


@Injectable()
export class AuthService {

  constructor(

    private readonly adminService:
      AdminService,

    private readonly jwtService:
      JwtService,

    private readonly configService:
      ConfigService,

  ) {}


  // =====================================================
  // LOGIN
  // =====================================================

  async login(
    adminLoginDto: AdminLoginDto,
  ) {

    const {
      email,
      password,
    } = adminLoginDto;


    // =========================
    // 1. Find admin
    // =========================

    const admin =
      await this.adminService.findByEmail(
        email,
      );


    if (!admin) {

      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }


    // =========================
    // 2. Check active
    // =========================

    if (!admin.isActive) {

      throw new UnauthorizedException(
        'Admin account is inactive',
      );
    }


    // =========================
    // 3. Check password
    // =========================

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


    // =========================
    // 4. Generate tokens
    // =========================

    const tokens =
      await this.generateTokens(
        admin._id.toString(),
        admin.email,
      );


    // =========================
    // 5. Save refresh token ID
    // =========================

    await this.adminService
      .updateRefreshTokenId(
        admin._id.toString(),
        tokens.refreshTokenId,
      );


    // =========================
    // 6. Response
    // =========================

    return {

      message:
        'Login successful',

      accessToken:
        tokens.accessToken,

      refreshToken:
        tokens.refreshToken,

      admin: {

        id:
          admin._id,

        name:
          admin.name,

        email:
          admin.email,

      },
    };
  }


  // =====================================================
  // REFRESH TOKEN
  // =====================================================

  async refreshToken(
    refreshToken: string,
  ) {

    try {

      // =========================
      // 1. Verify refresh token
      // =========================

      const payload =
        await this.jwtService.verifyAsync(
          refreshToken,
          {
            secret:
              this.configService.get<string>(
                'JWT_REFRESH_SECRET',
              ),
          },
        );


      // =========================
      // 2. Check jti
      // =========================

      if (!payload.jti) {

        throw new UnauthorizedException(
          'Invalid refresh token',
        );
      }


      // =========================
      // 3. Find admin
      // =========================

      const admin =
        await this.adminService.findById(
          payload.sub,
        );


      if (!admin) {

        throw new UnauthorizedException(
          'Admin not found',
        );
      }


      // =========================
      // 4. Check active
      // =========================

      if (!admin.isActive) {

        throw new UnauthorizedException(
          'Admin account is inactive',
        );
      }


      // =========================
      // 5. Check stored jti
      // =========================

      if (
        !admin.refreshTokenId
      ) {

        throw new UnauthorizedException(
          'Refresh token not found',
        );
      }


      // =========================
      // 6. Compare jti
      // =========================

      if (
        payload.jti !==
        admin.refreshTokenId
      ) {

        throw new UnauthorizedException(
          'Invalid refresh token',
        );
      }


      // =========================
      // 7. Generate NEW tokens
      // =========================

      const tokens =
        await this.generateTokens(
          admin._id.toString(),
          admin.email,
        );


      // =========================
      // 8. Replace old jti
      // =========================

      await this.adminService
        .updateRefreshTokenId(
          admin._id.toString(),
          tokens.refreshTokenId,
        );


      // =========================
      // 9. Return tokens
      // =========================

      return {

        message:
          'Token refreshed successfully',

        accessToken:
          tokens.accessToken,

        refreshToken:
          tokens.refreshToken,
      };


    } catch (error) {

      if (
        error instanceof
        UnauthorizedException
      ) {

        throw error;
      }


      throw new UnauthorizedException(
        'Invalid or expired refresh token',
      );
    }
  }




  // =====================================================
  // GENERATE TOKENS
  // =====================================================

  private async generateTokens(
  adminId: string,
  email: string,
) {

  // Unique ID for this refresh token
  const refreshTokenId = randomUUID();

  // Access token payload
  const accessPayload = {
    sub: adminId,
    email: email,
  };

  // Refresh token payload
  const refreshPayload = {
    sub: adminId,
    email: email,
    jti: refreshTokenId,
  };

  // =========================
  // ACCESS TOKEN
  // =========================

  const accessToken =
    await this.jwtService.signAsync(
      accessPayload,
      {
        secret:
          this.configService.get<string>(
            'JWT_ACCESS_SECRET',
          )!,

        expiresIn:
          this.configService.get<string>(
            'JWT_ACCESS_EXPIRES',
          ) as any,
      },
    );

  // =========================
  // REFRESH TOKEN
  // =========================

  const refreshToken =
    await this.jwtService.signAsync(
      refreshPayload,
      {
        secret:
          this.configService.get<string>(
            'JWT_REFRESH_SECRET',
          )!,

        expiresIn:
          this.configService.get<string>(
            'JWT_REFRESH_EXPIRES',
          ) as any,
      },
    );

  return {
    accessToken,
    refreshToken,
    refreshTokenId,
  };
}



//Logout
  async logout(adminId: string) {

  await this.adminService.removeRefreshTokenId(
    adminId,
  );

  return {
    message: 'Logout successful',
  };
}
}