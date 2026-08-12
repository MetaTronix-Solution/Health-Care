import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AdminService } from '../../admin/admin.service';





@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
) {
  constructor(
    private readonly configService: ConfigService,

    private readonly adminService: AdminService,
  ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),

      ignoreExpiration: false,

      secretOrKey:
        configService.get<string>(
          'JWT_ACCESS_SECRET',
        ),
    });
  }

  async validate(payload: {
    sub: string;
    email: string;
  }) {
    const admin =
      await this.adminService.findById(
        payload.sub,
      );

    if (!admin) {
      throw new UnauthorizedException(
        'Admin not found',
      );
    }

    if (!admin.isActive) {
      throw new UnauthorizedException(
        'Admin account is inactive',
      );
    }

    return {
      id: admin._id.toString(),
      email: admin.email,
      name: admin.name,
    };
  }
}