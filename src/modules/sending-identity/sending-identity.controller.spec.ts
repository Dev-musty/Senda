import { Test, TestingModule } from '@nestjs/testing';
import { SendingIdentityController } from './sending-identity.controller.js';
import { SendingIdentityService } from './sending-identity.service.js';

// Smoke test: checks the controller can be created. The service is replaced
// with an empty mock so no database is needed. Add real tests per endpoint.
describe('SendingIdentityController', () => {
  let controller: SendingIdentityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendingIdentityController],
      providers: [{ provide: SendingIdentityService, useValue: {} }],
    }).compile();

    controller = module.get<SendingIdentityController>(SendingIdentityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
