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
import { SendingIdentityService } from './sending-identity.service.js';
import { SendingIdentityDocs } from './docs/sending-identity.docs.js';
import { CreateSendingIdentityDto, UpdateSendingIdentityDto } from './dtos/sending-identity.dto.js';

// Controllers only route: take the request in, call the service, return.
// No business logic here.
// Every route here is protected by the global AuthGuard by default. Add
// @Public() only to a route that must be open. TODO(template): scope queries
// to the owner, so one user cannot read or change another user's rows
// (see skills/security-checklist.skill.md, gate 1).
@ApiTags('sending-identity')
@Controller('sending-identity')
export class SendingIdentityController {
  constructor(private readonly sendingIdentityService: SendingIdentityService) {}

  @Post()
  @SendingIdentityDocs.Create()
  create(@Body() dto: CreateSendingIdentityDto) {
    return this.sendingIdentityService.create(dto);
  }

  @Get()
  @SendingIdentityDocs.FindAll()
  findAll() {
    return this.sendingIdentityService.findAll();
  }

  @Get(':id')
  @SendingIdentityDocs.FindOne()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.sendingIdentityService.findOne(id);
  }

  @Patch(':id')
  @SendingIdentityDocs.Update()
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateSendingIdentityDto,
  ) {
    return this.sendingIdentityService.update(id, dto);
  }

  @Delete(':id')
  @SendingIdentityDocs.Remove()
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.sendingIdentityService.remove(id);
  }
}
