import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';

import { AdminLoginDto } from './dto/admin-login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(
    @Body() adminLoginDto: AdminLoginDto,
  ) {
    return this.authService.login(
      adminLoginDto,
    );
  }

  @Post("refresh")
  async refreshToken(
    @Body() refreshTokenDto: RefreshTokenDto,
  ) {
    return this.authService.refreshToken(refreshTokenDto.refreshToken)
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  getProfile(
    @Req() req: any
  ) {
    return {
      message: "Admin authentication successful",
      admin: req.user
    }
  }

  @Post('logout')
@UseGuards(JwtAuthGuard)
async logout(@Req() request: any) {

  return this.authService.logout(
    request.user.adminId,
  );
}
}