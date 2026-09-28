import * as bcrypt from 'bcryptjs';
import mongoose, { Model } from 'mongoose';
import 'dotenv/config';

import { Admin, AdminSchema } from './schemas/admin.schema';

async function createAdmin() {
  const mongoUri = process.env.MONGO_URI;
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME;

  if (!mongoUri || !email || !password || !name) {
    console.error(
      'Missing env vars: MONGO_URI, ADMIN_EMAIL, ADMIN_PASSWORD and ADMIN_NAME must all be set in .env',
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);

    console.log('MongoDB connected');

    const AdminModel: Model<Admin> =
      (mongoose.models.Admin as Model<Admin>) ??
      mongoose.model<Admin>('Admin', AdminSchema);

    // Check if admin already exists
    const existingAdmin = await AdminModel.findOne({ email });

    if (existingAdmin) {
      console.log('Admin already exists');

      await mongoose.disconnect();

      return;
    }

    // Hash admin password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    await AdminModel.create({
      name,
      email,
      password: hashedPassword,
      isActive: true,
    });

    console.log('Admin created successfully');

    await mongoose.disconnect();
  } catch (error) {
    console.error('Failed to create admin:', error);

    await mongoose.disconnect();

    process.exit(1);
  }
}

createAdmin();
