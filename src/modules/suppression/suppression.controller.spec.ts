import { Test, TestingModule } from '@nestjs/testing';
import { SuppressionController } from './suppression.controller.js';
import { SuppressionService } from './suppression.service.js';

// Smoke test: checks the controller can be created. The service is replaced
// with an empty mock so no database is needed. Add real tests per endpoint.
describe('SuppressionController', () => {
  let controller: SuppressionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppressionController],
      providers: [{ provide: SuppressionService, useValue: {} }],
    }).compile();

    controller = module.get<SuppressionController>(SuppressionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
