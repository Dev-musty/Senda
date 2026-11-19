import { Injectable } from '@nestjs/common';
import { CreateTenantDto, UpdateTenantDto } from './dtos/tenant.dto.js';
import { TenantCrudService } from './services/tenant-crud.service.js';

// The main service only orchestrates: it calls the sub-services in services/
// and holds no logic of its own. The controller talks to this class and never
// to the sub-services directly.
@Injectable()
export class TenantService {
  constructor(private readonly crudService: TenantCrudService) {}

  create(dto: CreateTenantDto) {
    return this.crudService.create(dto);
  }

  findAll() {
    return this.crudService.findAll();
  }

  findOne(id: string) {
    return this.crudService.findOne(id);
  }

  update(id: string, dto: UpdateTenantDto) {
    return this.crudService.update(id, dto);
  }

  remove(id: string) {
    return this.crudService.remove(id);
  }
}
