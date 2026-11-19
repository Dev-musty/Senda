import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service.js';
import { EmailCrudService } from './services/email-crud.service.js';

// Smoke test: checks the main service can be created. Its sub-service is
// replaced with an empty mock so no database is needed. Add real tests per
// method as you implement them.
describe('EmailService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        { provide: EmailCrudService, useValue: {} },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
