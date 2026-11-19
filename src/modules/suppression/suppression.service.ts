import { Injectable } from '@nestjs/common';
import { CreateSuppressionDto, UpdateSuppressionDto } from './dtos/suppression.dto.js';
import { SuppressionCrudService } from './services/suppression-crud.service.js';

// The main service only orchestrates: it calls the sub-services in services/
// and holds no logic of its own. The controller talks to this class and never
// to the sub-services directly.
@Injectable()
export class SuppressionService {
  constructor(private readonly crudService: SuppressionCrudService) {}

  create(dto: CreateSuppressionDto) {
    return this.crudService.create(dto);
  }

  findAll() {
    return this.crudService.findAll();
  }

  findOne(id: string) {
    return this.crudService.findOne(id);
  }

  update(id: string, dto: UpdateSuppressionDto) {
    return this.crudService.update(id, dto);
  }

  remove(id: string) {
    return this.crudService.remove(id);
  }
}
