import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeyService } from './api-key.service.js';
import { ApiKeyCrudService } from './services/api-key-crud.service.js';

// Smoke test: checks the main service can be created. Its sub-service is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('ApiKeyService', () => {
  let service: ApiKeyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiKeyService,
        { provide: ApiKeyCrudService, useValue: {} },
      ],
    }).compile();

    service = module.get<ApiKeyService>(ApiKeyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
