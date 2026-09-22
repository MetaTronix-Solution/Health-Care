import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-dto';
import { FindContactsDto } from './dto/find-contacts.dto';
import { UpdateContactStatusDto } from './dto/update-contact-status.dto';
import { AdminAuthGuard } from '../auth/guards/admin-auth.guard'; // adjust path if different

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  // Public — the contact form on the website
  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  // Admin — the inquiries table
  @UseGuards(AdminAuthGuard)
  @Get()
  async findAll(@Query() query: FindContactsDto) {
    return this.contactService.findAll(query);
  }

  // Admin — the "View" modal
  @UseGuards(AdminAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  // Admin — the status dropdown
  @UseGuards(AdminAuthGuard)
  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateContactStatusDto,
  ) {
    return this.contactService.updateStatus(id, dto.status);
  }
}
