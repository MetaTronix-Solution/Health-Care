import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const request =
      context.switchToHttp().getRequest();

    const authHeader =
      request.headers.authorization;

    // Check Authorization header
    if (!authHeader) {
      throw new UnauthorizedException(
        'Authorization token is required',
      );
    }

    // Check Bearer format
    const [type, token] =
      authHeader.split(' ');

    if (
      type !== 'Bearer' ||
      !token
    ) {
      throw new UnauthorizedException(
        'Invalid authorization format',
      );
    }

    try {

      // Verify access token
      const payload =
        await this.jwtService.verifyAsync(
          token,
          {
            secret:
              this.configService.get<string>(
                'JWT_ACCESS_SECRET',
              ),
          },
        );

      // Store user/admin information
      request.user = payload;

      return true;

    } catch (error) {

      throw new UnauthorizedException(
        'Invalid or expired access token',
      );
    }
  }
}