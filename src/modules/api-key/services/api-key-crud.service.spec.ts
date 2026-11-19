import { Test, TestingModule } from '@nestjs/testing';
import { ApiKeyModelAction } from '../model-actions/api-key-model-action.js';
import { ApiKeyCrudService } from './api-key-crud.service.js';

// Smoke test: checks the sub-service can be created. The model action is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('ApiKeyCrudService', () => {
  let service: ApiKeyCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiKeyCrudService,
        { provide: ApiKeyModelAction, useValue: {} },
      ],
    }).compile();

    service = module.get<ApiKeyCrudService>(ApiKeyCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
