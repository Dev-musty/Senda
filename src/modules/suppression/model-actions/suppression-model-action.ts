import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractModel } from '../../../util/abstract-model-action.js';
import { SuppressionModel } from '../models/suppression.model.js';

// Model actions are the only layer that talks to the repository.
// Services call these methods; they never use Repository directly.
@Injectable()
export class SuppressionModelAction extends AbstractModel<SuppressionModel> {
  constructor(
    @InjectRepository(SuppressionModel)
    suppressionRepository: Repository<SuppressionModel>,
  ) {
    super(suppressionRepository, SuppressionModel);
  }

  // Entity-specific queries go here (generic CRUD is inherited)
}
