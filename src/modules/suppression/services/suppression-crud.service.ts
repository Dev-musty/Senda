import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateSuppressionDto, UpdateSuppressionDto } from '../dtos/suppression.dto.js';
import { SuppressionModelAction } from '../model-actions/suppression-model-action.js';

// Sub-services hold the actual logic, one job each. This one does the basic
// create / read / update / delete work through the model action, so the main
// suppression.service.ts stays a thin orchestrator. As the feature grows, add
// more sub-services here (a notifier, an importer, ...) and call them from
// the main service.
// TODO(template): implement
@Injectable()
export class SuppressionCrudService {
  constructor(private readonly suppressionModelAction: SuppressionModelAction) {}

  async create(_dto: CreateSuppressionDto) {
    throw new NotImplementedException();
  }

  async findAll() {
    throw new NotImplementedException();
  }

  async findOne(_id: string) {
    throw new NotImplementedException();
  }

  async update(_id: string, _dto: UpdateSuppressionDto) {
    throw new NotImplementedException();
  }

  async remove(_id: string) {
    throw new NotImplementedException();
  }
}
