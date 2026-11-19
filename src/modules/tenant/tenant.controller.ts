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
import { TenantService } from './tenant.service.js';
import { TenantDocs } from './docs/tenant.docs.js';
import { CreateTenantDto, UpdateTenantDto } from './dtos/tenant.dto.js';

// Controllers only route: take the request in, call the service, return.
// No business logic here.
// Every route here is protected by the global AuthGuard by default. Add
// @Public() only to a route that must be open. TODO(template): scope queries
// to the owner, so one user cannot read or change another user's rows
// (see skills/security-checklist.skill.md, gate 1).
@ApiTags('tenant')
@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  @TenantDocs.Create()
  create(@Body() dto: CreateTenantDto) {
    return this.tenantService.create(dto);
  }

  @Get()
  @TenantDocs.FindAll()
  findAll() {
    return this.tenantService.findAll();
  }

  @Get(':id')
  @TenantDocs.FindOne()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.tenantService.findOne(id);
  }

  @Patch(':id')
  @TenantDocs.Update()
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateTenantDto,
  ) {
    return this.tenantService.update(id, dto);
  }

  @Delete(':id')
  @TenantDocs.Remove()
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.tenantService.remove(id);
  }
}
