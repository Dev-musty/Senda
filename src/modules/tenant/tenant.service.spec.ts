import { Test, TestingModule } from '@nestjs/testing';
import { TenantService } from './tenant.service.js';
import { TenantCrudService } from './services/tenant-crud.service.js';

// Smoke test: checks the main service can be created. Its sub-service is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('TenantService', () => {
  let service: TenantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TenantService,
        { provide: TenantCrudService, useValue: {} },
      ],
    }).compile();

    service = module.get<TenantService>(TenantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
