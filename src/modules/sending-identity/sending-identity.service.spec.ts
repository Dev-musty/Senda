import { Test, TestingModule } from '@nestjs/testing';
import { SendingIdentityService } from './sending-identity.service.js';
import { SendingIdentityCrudService } from './services/sending-identity-crud.service.js';

// Smoke test: checks the main service can be created. Its sub-service is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('SendingIdentityService', () => {
  let service: SendingIdentityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SendingIdentityService,
        { provide: SendingIdentityCrudService, useValue: {} },
      ],
    }).compile();

    service = module.get<SendingIdentityService>(SendingIdentityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
