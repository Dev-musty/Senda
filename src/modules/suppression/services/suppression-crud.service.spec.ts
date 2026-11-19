import { Test, TestingModule } from '@nestjs/testing';
import { SuppressionModelAction } from '../model-actions/suppression-model-action.js';
import { SuppressionCrudService } from './suppression-crud.service.js';

// Smoke test: checks the sub-service can be created. The model action is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('SuppressionCrudService', () => {
  let service: SuppressionCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuppressionCrudService,
        { provide: SuppressionModelAction, useValue: {} },
      ],
    }).compile();

    service = module.get<SuppressionCrudService>(SuppressionCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
