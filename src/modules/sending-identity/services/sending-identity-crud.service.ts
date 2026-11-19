import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateSendingIdentityDto, UpdateSendingIdentityDto } from '../dtos/sending-identity.dto.js';
import { SendingIdentityModelAction } from '../model-actions/sending-identity-model-action.js';

// Sub-services hold the actual logic, one job each. This one does the basic
// create / read / update / delete work through the model action, so the main
// sending-identity.service.ts stays a thin orchestrator. As the feature grows, add
// more sub-services here (a notifier, an importer, ...) and call them from
// the main service.
// TODO(template): implement
@Injectable()
export class SendingIdentityCrudService {
  constructor(private readonly sendingIdentityModelAction: SendingIdentityModelAction) {}

  async create(_dto: CreateSendingIdentityDto) {
    throw new NotImplementedException();
  }

  async findAll() {
    throw new NotImplementedException();
  }

  async findOne(_id: string) {
    throw new NotImplementedException();
  }

  async update(_id: string, _dto: UpdateSendingIdentityDto) {
    throw new NotImplementedException();
  }

  async remove(_id: string) {
    throw new NotImplementedException();
  }
}
