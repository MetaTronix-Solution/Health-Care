import { IsEnum } from 'class-validator';

import { ContactStatus } from '../schemas/contact.schema';

export class UpdateContactStatusDto {
  @IsEnum(ContactStatus, {
    message: 'status must be one of: New, In Progress, Resolved, Closed',
  })
  status!: ContactStatus;
}
