import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmailService } from './email.service.js';
import { EmailDocs } from './docs/email.docs.js';
import { CreateEmailDto, UpdateEmailDto } from './dtos/email.dto.js';

// Controllers only route: take the request in, call the service, return.
// No business logic here.
// Every route here is protected by the global AuthGuard by default. Add
// @Public() only to a route that must be open. TODO(template): scope queries
// to the owner, so one user cannot read or change another user's rows
// (see skills/security-checklist.skill.md, gate 1).
@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  @EmailDocs.Create()
  create(@Body() dto: CreateEmailDto) {
    return this.emailService.create(dto);
  }

  @Get()
  @EmailDocs.FindAll()
  findAll() {
    return this.emailService.findAll();
  }

  @Get(':id')
  @EmailDocs.FindOne()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.emailService.findOne(id);
  }

  @Patch(':id')
  @EmailDocs.Update()
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateEmailDto,
  ) {
    return this.emailService.update(id, dto);
  }

  @Delete(':id')
  @EmailDocs.Remove()
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.emailService.remove(id);
  }
}
