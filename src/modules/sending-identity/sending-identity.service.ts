import { Injectable } from '@nestjs/common';
import { CreateSendingIdentityDto, UpdateSendingIdentityDto } from './dtos/sending-identity.dto.js';
import { SendingIdentityCrudService } from './services/sending-identity-crud.service.js';

// The main service only orchestrates: it calls the sub-services in services/
// and holds no logic of its own. The controller talks to this class and never
// to the sub-services directly.
@Injectable()
export class SendingIdentityService {
  constructor(private readonly crudService: SendingIdentityCrudService) {}

  create(dto: CreateSendingIdentityDto) {
    return this.crudService.create(dto);
  }

  findAll() {
    return this.crudService.findAll();
  }

  findOne(id: string) {
    return this.crudService.findOne(id);
  }

  update(id: string, dto: UpdateSendingIdentityDto) {
    return this.crudService.update(id, dto);
  }

  remove(id: string) {
    return this.crudService.remove(id);
  }
}
