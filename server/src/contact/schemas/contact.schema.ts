import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>;

export enum ContactStatus {
  NEW = 'New',
  IN_PROGRESS = 'In Progress',
  RESOLVED = 'Resolved',
  CLOSED = 'Closed',
}

@Schema({
  timestamps: true,
})
export class Contact {
  @Prop({
    required: true,
    trim: true,
  })
  name!: string;

  @Prop({
    required: true,
    lowercase: true,
    trim: true,
  })
  email!: string;

  @Prop({
    required: true,
    trim: true,
  })
  phone!: string;

  @Prop({
    required: true,
    trim: true,
  })
  subject!: string;

  @Prop({
    required: true,
    trim: true,
  })
  message!: string;

  @Prop({
    default: false,
  })
  isRead!: boolean;

  @Prop({
    type: String,
    enum: ContactStatus,
    default: ContactStatus.NEW,
  })
  status!: ContactStatus;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
