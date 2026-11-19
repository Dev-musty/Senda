import { Test, TestingModule } from '@nestjs/testing';
import { SendingIdentityModelAction } from '../model-actions/sending-identity-model-action.js';
import { SendingIdentityCrudService } from './sending-identity-crud.service.js';

// Smoke test: checks the sub-service can be created. The model action is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('SendingIdentityCrudService', () => {
  let service: SendingIdentityCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SendingIdentityCrudService,
        { provide: SendingIdentityModelAction, useValue: {} },
      ],
    }).compile();

    service = module.get<SendingIdentityCrudService>(SendingIdentityCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
