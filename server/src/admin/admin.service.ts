import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import {
  Admin,
  AdminDocument,
} from './schemas/admin.schema';

@Injectable()
export class AdminService {

  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel:
      Model<AdminDocument>,
  ) {}

  async findByEmail(email: string) {

    return this.adminModel
      .findOne({
        email: email.toLowerCase(),
      })
      .exec();
  }

  async findById(id: string) {

    return this.adminModel
      .findById(id)
      .exec();
  }

  async updateRefreshTokenId(
    adminId: string,
    refreshTokenId: string,
  ) {

    return this.adminModel
      .findByIdAndUpdate(
        adminId,
        {
          $set: {
            refreshTokenId,
          },
        },
        {
          returnDocument: 'after',
        },
      )
      .exec();
  }

  async removeRefreshTokenId(
    adminId: string,
  ) {

    return this.adminModel
      .findByIdAndUpdate(
        adminId,
        {
          $set: {
            refreshTokenId: null,
          },
        },
        {
          returnDocument: 'after',
        },
      )
      .exec();
  }

}