import { Injectable } from '@nestjs/common';
import { CreateApiKeyDto, UpdateApiKeyDto } from './dtos/api-key.dto.js';
import { ApiKeyCrudService } from './services/api-key-crud.service.js';

// The main service only orchestrates: it calls the sub-services in services/
// and holds no logic of its own. The controller talks to this class and never
// to the sub-services directly.
@Injectable()
export class ApiKeyService {
  constructor(private readonly crudService: ApiKeyCrudService) {}

  create(dto: CreateApiKeyDto) {
    return this.crudService.create(dto);
  }

  findAll() {
    return this.crudService.findAll();
  }

  findOne(id: string) {
    return this.crudService.findOne(id);
  }

  update(id: string, dto: UpdateApiKeyDto) {
    return this.crudService.update(id, dto);
  }

  remove(id: string) {
    return this.crudService.remove(id);
  }
}
