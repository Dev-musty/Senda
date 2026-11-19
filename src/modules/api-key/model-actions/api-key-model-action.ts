import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractModel } from '../../../util/abstract-model-action.js';
import { ApiKeyModel } from '../models/api-key.model.js';

// Model actions are the only layer that talks to the repository.
// Services call these methods; they never use Repository directly.
@Injectable()
export class ApiKeyModelAction extends AbstractModel<ApiKeyModel> {
  constructor(
    @InjectRepository(ApiKeyModel)
    apiKeyRepository: Repository<ApiKeyModel>,
  ) {
    super(apiKeyRepository, ApiKeyModel);
  }

  // Entity-specific queries go here (generic CRUD is inherited)
}
