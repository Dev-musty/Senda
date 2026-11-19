import { Test, TestingModule } from '@nestjs/testing';
import { TenantModelAction } from '../model-actions/tenant-model-action.js';
import { TenantCrudService } from './tenant-crud.service.js';

// Smoke test: checks the sub-service can be created. The model action is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('TenantCrudService', () => {
  let service: TenantCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TenantCrudService,
        { provide: TenantModelAction, useValue: {} },
      ],
    }).compile();

    service = module.get<TenantCrudService>(TenantCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
