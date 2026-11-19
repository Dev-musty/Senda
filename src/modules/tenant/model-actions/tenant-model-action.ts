import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractModel } from '../../../util/abstract-model-action.js';
import { TenantModel } from '../models/tenant.model.js';

// Model actions are the only layer that talks to the repository.
// Services call these methods; they never use Repository directly.
@Injectable()
export class TenantModelAction extends AbstractModel<TenantModel> {
  constructor(
    @InjectRepository(TenantModel)
    tenantRepository: Repository<TenantModel>,
  ) {
    super(tenantRepository, TenantModel);
  }

  // Entity-specific queries go here (generic CRUD is inherited)
}
