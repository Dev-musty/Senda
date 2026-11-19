import { Test, TestingModule } from '@nestjs/testing';
import { SuppressionService } from './suppression.service.js';
import { SuppressionCrudService } from './services/suppression-crud.service.js';

// Smoke test: checks the main service can be created. Its sub-service is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('SuppressionService', () => {
  let service: SuppressionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuppressionService,
        { provide: SuppressionCrudService, useValue: {} },
      ],
    }).compile();

    service = module.get<SuppressionService>(SuppressionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
