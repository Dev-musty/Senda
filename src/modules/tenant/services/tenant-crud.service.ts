import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateTenantDto, UpdateTenantDto } from '../dtos/tenant.dto.js';
import { TenantModelAction } from '../model-actions/tenant-model-action.js';

// Sub-services hold the actual logic, one job each. This one does the basic
// create / read / update / delete work through the model action, so the main
// tenant.service.ts stays a thin orchestrator. As the feature grows, add
// more sub-services here (a notifier, an importer, ...) and call them from
// the main service.
// TODO(template): implement
@Injectable()
export class TenantCrudService {
  constructor(private readonly tenantModelAction: TenantModelAction) {}

  async create(_dto: CreateTenantDto) {
    throw new NotImplementedException();
  }

  async findAll() {
    throw new NotImplementedException();
  }

  async findOne(_id: string) {
    throw new NotImplementedException();
  }

  async update(_id: string, _dto: UpdateTenantDto) {
    throw new NotImplementedException();
  }

  async remove(_id: string) {
    throw new NotImplementedException();
  }
}
