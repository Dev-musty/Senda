import { Injectable } from '@nestjs/common';
import { CreateEmailDto, UpdateEmailDto } from './dtos/email.dto.js';
import { EmailCrudService } from './services/email-crud.service.js';

// The main service only orchestrates: it calls the sub-services in services/
// and holds no logic of its own. The controller talks to this class and never
// to the sub-services directly.
@Injectable()
export class EmailService {
  constructor(private readonly crudService: EmailCrudService) {}

  create(dto: CreateEmailDto) {
    return this.crudService.create(dto);
  }

  findAll() {
    return this.crudService.findAll();
  }

  findOne(id: string) {
    return this.crudService.findOne(id);
  }

  update(id: string, dto: UpdateEmailDto) {
    return this.crudService.update(id, dto);
  }

  remove(id: string) {
    return this.crudService.remove(id);
  }
}
