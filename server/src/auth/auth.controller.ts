import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { AuthService } from './auth.service';

import { AdminLoginDto } from './dto/admin-login.dto';

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
}