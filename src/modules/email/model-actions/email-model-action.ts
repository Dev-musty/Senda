import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractModel } from '../../../util/abstract-model-action.js';
import { EmailModel } from '../models/email.model.js';

// Model actions are the only layer that talks to the repository.
// Services call these methods; they never use Repository directly.
@Injectable()
export class EmailModelAction extends AbstractModel<EmailModel> {
  constructor(
    @InjectRepository(EmailModel)
    emailRepository: Repository<EmailModel>,
  ) {
    super(emailRepository, EmailModel);
  }

  // Entity-specific queries go here (generic CRUD is inherited)
}
