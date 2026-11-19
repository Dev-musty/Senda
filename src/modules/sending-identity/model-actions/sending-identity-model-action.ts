import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractModel } from '../../../util/abstract-model-action.js';
import { SendingIdentityModel } from '../models/sending-identity.model.js';

// Model actions are the only layer that talks to the repository.
// Services call these methods; they never use Repository directly.
@Injectable()
export class SendingIdentityModelAction extends AbstractModel<SendingIdentityModel> {
  constructor(
    @InjectRepository(SendingIdentityModel)
    sendingIdentityRepository: Repository<SendingIdentityModel>,
  ) {
    super(sendingIdentityRepository, SendingIdentityModel);
  }

  // Entity-specific queries go here (generic CRUD is inherited)
}
