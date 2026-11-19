import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateEmailDto, UpdateEmailDto } from '../dtos/email.dto.js';
import { EmailModelAction } from '../model-actions/email-model-action.js';

// Sub-services hold the actual logic, one job each. This one does the basic
// create / read / update / delete work through the model action, so the main
// email.service.ts stays a thin orchestrator. As the feature grows, add
// more sub-services here (a notifier, an importer, ...) and call them from
// the main service.
// TODO(template): implement
@Injectable()
export class EmailCrudService {
  constructor(private readonly emailModelAction: EmailModelAction) {}

  async create(_dto: CreateEmailDto) {
    throw new NotImplementedException();
  }

  async findAll() {
    throw new NotImplementedException();
  }

  async findOne(_id: string) {
    throw new NotImplementedException();
  }

  async update(_id: string, _dto: UpdateEmailDto) {
    throw new NotImplementedException();
  }

  async remove(_id: string) {
    throw new NotImplementedException();
  }
}
