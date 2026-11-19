import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateApiKeyDto, UpdateApiKeyDto } from '../dtos/api-key.dto.js';
import { ApiKeyModelAction } from '../model-actions/api-key-model-action.js';

// Sub-services hold the actual logic, one job each. This one does the basic
// create / read / update / delete work through the model action, so the main
// api-key.service.ts stays a thin orchestrator. As the feature grows, add
// more sub-services here (a notifier, an importer, ...) and call them from
// the main service.
// TODO(template): implement
@Injectable()
export class ApiKeyCrudService {
  constructor(private readonly apiKeyModelAction: ApiKeyModelAction) {}

  async create(_dto: CreateApiKeyDto) {
    throw new NotImplementedException();
  }

  async findAll() {
    throw new NotImplementedException();
  }

  async findOne(_id: string) {
    throw new NotImplementedException();
  }

  async update(_id: string, _dto: UpdateApiKeyDto) {
    throw new NotImplementedException();
  }

  async remove(_id: string) {
    throw new NotImplementedException();
  }
}
