import {
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Contact, ContactDocument } from "./schemas/contact.schema";
import { Model } from "mongoose";
import { CreateContactDto } from "./dto/create-dto";

import * as nodemailer from "nodemailer";

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name)
    private readonly contactModel: Model<ContactDocument>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    try {
      // ===============================
      // Save to Database
      // ===============================

      const contact = await this.contactModel.create(createContactDto);

      // ===============================
      // Mail Configuration
      // ===============================

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // ===============================
      // Mail to Admin
      // ===============================

      await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: process.env.SENDER_EMAIL,
        subject: "📩 New Healthcare Contact Inquiry",

        html: `
        <h2>New Healthcare Contact Form Submission</h2>

        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td><strong>Name</strong></td>
            <td>${createContactDto.name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${createContactDto.email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${createContactDto.phone}</td>
          </tr>

          <tr>
            <td><strong>Subject</strong></td>
            <td>${createContactDto.subject || "N/A"}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${createContactDto.message}</td>
          </tr>
        </table>

        <br/>

        <p>
          This inquiry was submitted through the
          <strong>Healthcare</strong> website.
        </p>
        `,
      });

      // ===============================
      // Confirmation Mail to User
      // ===============================

      await transporter.sendMail({
        from: process.env.SENDER_EMAIL,

        to: createContactDto.email,

        subject: "Thank you for contacting Healthcare",

        html: `
        <h2>Hello ${createContactDto.name},</h2>

        <p>
        Thank you for contacting
        <strong>Healthcare</strong>.
        </p>

        <p>
        We have received your inquiry and our team
        will contact you shortly.
        </p>

        <br/>

        <b>Your Submitted Details</b>

        <ul>
          <li>Name : ${createContactDto.name}</li>
          <li>Email : ${createContactDto.email || "N/A"}</li>
          <li>Phone : ${createContactDto.phone}</li>
          <li>Subject : ${createContactDto.subject}</li>
          <li>Message : ${createContactDto.message}</li>
        </ul>

        <br/>

        Regards,
        <br/>
        <strong>Healthcare Team</strong>
        `,
      });

      return {
        success: true,
        message: "Inquiry submitted successfully.",
        contact,
      };
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException(
        "Failed to submit inquiry",
      );
    }
  }
}