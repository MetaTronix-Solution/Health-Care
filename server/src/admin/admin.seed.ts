import * as bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import 'dotenv/config';

import {
  Admin,
  AdminSchema,
} from './schemas/admin.schema';

async function createAdmin() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI!,
    );

    console.log('MongoDB connected');

    const AdminModel =
      mongoose.models.Admin ||
      mongoose.model<Admin>(
        'Admin',
        AdminSchema,
      );

    // Check if admin already exists
    const existingAdmin =
      await AdminModel.findOne({
        email: process.env.ADMIN_EMAIL,
      });

    if (existingAdmin) {
      console.log('Admin already exists');

      await mongoose.disconnect();

      return;
    }

    // Hash admin password
    const hashedPassword =
      await bcrypt.hash(
        process.env.ADMIN_PASSWORD!,
        10,
      );

    // Create admin
    await AdminModel.create({
      name: process.env.ADMIN_NAME,

      email: process.env.ADMIN_EMAIL,

      password: hashedPassword,

      isActive: true,
    });

    console.log(
      'Admin created successfully',
    );

    await mongoose.disconnect();
  } catch (error) {
    console.error(
      'Failed to create admin:',
      error,
    );

    await mongoose.disconnect();

    process.exit(1);
  }
}

createAdmin();