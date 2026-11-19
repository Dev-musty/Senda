import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller.js';
import { EmailService } from './email.service.js';

// Smoke test: checks the controller can be created. The service is replaced
// with an empty mock so no database is needed. Add real tests per endpoint.
describe('EmailController', () => {
  let controller: EmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [{ provide: EmailService, useValue: {} }],
    }).compile();

    controller = module.get<EmailController>(EmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
