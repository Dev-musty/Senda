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
import { SuppressionService } from './suppression.service.js';
import { SuppressionDocs } from './docs/suppression.docs.js';
import { CreateSuppressionDto, UpdateSuppressionDto } from './dtos/suppression.dto.js';

// Controllers only route: take the request in, call the service, return.
// No business logic here.
// Every route here is protected by the global AuthGuard by default. Add
// @Public() only to a route that must be open. TODO(template): scope queries
// to the owner, so one user cannot read or change another user's rows
// (see skills/security-checklist.skill.md, gate 1).
@ApiTags('suppression')
@Controller('suppression')
export class SuppressionController {
  constructor(private readonly suppressionService: SuppressionService) {}

  @Post()
  @SuppressionDocs.Create()
  create(@Body() dto: CreateSuppressionDto) {
    return this.suppressionService.create(dto);
  }

  @Get()
  @SuppressionDocs.FindAll()
  findAll() {
    return this.suppressionService.findAll();
  }

  @Get(':id')
  @SuppressionDocs.FindOne()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.suppressionService.findOne(id);
  }

  @Patch(':id')
  @SuppressionDocs.Update()
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateSuppressionDto,
  ) {
    return this.suppressionService.update(id, dto);
  }

  @Delete(':id')
  @SuppressionDocs.Remove()
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.suppressionService.remove(id);
  }
}
