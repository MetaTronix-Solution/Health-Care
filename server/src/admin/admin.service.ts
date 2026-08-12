import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Admin.name)
        private readonly adminModel: Model<AdminDocument>,
    ) {}

    async findByEmail(email: string) {
        return this.adminModel.findOne({email: email.toLowerCase()})
    }

    async findById(id: string) {
        return this.adminModel.findById(id);
    }

    async updateRefreshToken(adminId: string, refreshToken: string) {
        return this.adminModel.findByIdAndUpdate(adminId, {refreshToken})
    }

    async removeRefreshToken(adminId: string) {
        return this.adminModel.findByIdAndUpdate(adminId, {
            refreshToken: null
        })
    }
}
