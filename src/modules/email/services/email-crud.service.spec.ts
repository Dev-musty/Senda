import { Test, TestingModule } from '@nestjs/testing';
import { EmailModelAction } from '../model-actions/email-model-action.js';
import { EmailCrudService } from './email-crud.service.js';

// Smoke test: checks the sub-service can be created. The model action is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('EmailCrudService', () => {
  let service: EmailCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailCrudService,
        { provide: EmailModelAction, useValue: {} },
      ],
    }).compile();

    service = module.get<EmailCrudService>(EmailCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
