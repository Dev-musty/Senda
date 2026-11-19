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
import { ApiKeyService } from './api-key.service.js';
import { ApiKeyDocs } from './docs/api-key.docs.js';
import { CreateApiKeyDto, UpdateApiKeyDto } from './dtos/api-key.dto.js';

// Controllers only route: take the request in, call the service, return.
// No business logic here.
// Every route here is protected by the global AuthGuard by default. Add
// @Public() only to a route that must be open. TODO(template): scope queries
// to the owner, so one user cannot read or change another user's rows
// (see skills/security-checklist.skill.md, gate 1).
@ApiTags('api-key')
@Controller('api-key')
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Post()
  @ApiKeyDocs.Create()
  create(@Body() dto: CreateApiKeyDto) {
    return this.apiKeyService.create(dto);
  }

  @Get()
  @ApiKeyDocs.FindAll()
  findAll() {
    return this.apiKeyService.findAll();
  }

  @Get(':id')
  @ApiKeyDocs.FindOne()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.apiKeyService.findOne(id);
  }

  @Patch(':id')
  @ApiKeyDocs.Update()
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateApiKeyDto,
  ) {
    return this.apiKeyService.update(id, dto);
  }

  @Delete(':id')
  @ApiKeyDocs.Remove()
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.apiKeyService.remove(id);
  }
}
