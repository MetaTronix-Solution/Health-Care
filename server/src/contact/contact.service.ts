import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Contact,
  ContactDocument,
  ContactStatus,
} from './schemas/contact.schema';
import mongoose, { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-dto';
import { FindContactsDto } from './dto/find-contacts.dto';

import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name)
    private readonly contactModel: Model<ContactDocument>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    try {
      // Save to Database

      const contact = await this.contactModel.create(createContactDto);

      // Mail Configuration

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Mail to Admin

      await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: process.env.SENDER_EMAIL,
        subject: '📩 New Healthcare Contact Inquiry',
        html: `
        <h2>New Healthcare Contact Form Submission</h2>
        <table border="1" cellpadding="10" cellspacing="0">
          <tr><td><strong>Name</strong></td><td>${createContactDto.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${createContactDto.email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${createContactDto.phone}</td></tr>
          <tr><td><strong>Subject</strong></td><td>${createContactDto.subject || 'N/A'}</td></tr>
          <tr><td><strong>Message</strong></td><td>${createContactDto.message}</td></tr>
        </table>
        <br/>
        <p>This inquiry was submitted through the <strong>Healthcare</strong> website.</p>
        `,
      });

      // Confirmation Mail to User

      await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: createContactDto.email,
        subject: 'Thank you for contacting Hemanshi Biomedical Solution',
        html: `
        <h2>Hello ${createContactDto.name},</h2>
        <p>Thank you for contacting <strong>Hemanshi Biomedical Solution</strong>.</p>
        <p>We have received your inquiry and our team will contact you shortly.</p>
        <br/>
        <b>Your Submitted Details</b>
        <ul>
          <li>Name : ${createContactDto.name}</li>
          <li>Email : ${createContactDto.email || 'N/A'}</li>
          <li>Phone : ${createContactDto.phone}</li>
          <li>Subject : ${createContactDto.subject}</li>
          <li>Message : ${createContactDto.message}</li>
        </ul>
        <br/>
        Regards,<br/>
        <strong>Hemanshi Biomedical Solution Team</strong>
        `,
      });

      return {
        success: true,
        message: 'Inquiry submitted successfully.',
        contact,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Failed to submit inquiry');
    }
  }

  // List (admin dashboard table)

  async findAll(query: FindContactsDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const filter: Record<string, any> = {};

    if (query.status) {
      filter.status = query.status;
    }

    if (query.search) {
      const regex = new RegExp(query.search.trim(), 'i');
      filter.$or = [{ name: regex }, { email: regex }, { phone: regex }];
    }

    const [items, total] = await Promise.all([
      this.contactModel
        .find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
      this.contactModel.countDocuments(filter),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.max(1, Math.ceil(total / limit)),
    };
  }

  // Single inquiry (the "View" modal)

  async findOne(id: string) {
    const contact = await this.contactModel.findById(id);

    if (!contact) {
      throw new NotFoundException('Inquiry not found');
    }

    // mark as read the first time an admin opens it
    if (!contact.isRead) {
      contact.isRead = true;
      await contact.save();
    }

    return contact;
  }

  // Update status (the dropdown)

  async updateStatus(id: string, status: ContactStatus) {
    const contact = await this.contactModel.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    if (!contact) {
      throw new NotFoundException('Inquiry not found');
    }

    return contact;
  }
}
