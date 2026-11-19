import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiKeyController } from './api-key.controller.js';
import { ApiKeyService } from './api-key.service.js';
import { ApiKeyModelAction } from './model-actions/api-key-model-action.js';
import { ApiKeyModel } from './models/api-key.model.js';
import { ApiKeyCrudService } from './services/api-key-crud.service.js';

// The module wires this feature together: it registers the model with
// TypeORM, and declares the controller and the providers (main service,
// sub-services and model action). Register it in app.module.ts (nest-kit does
// this for you).
@Module({
  imports: [TypeOrmModule.forFeature([ApiKeyModel])],
  controllers: [ApiKeyController],
  providers: [
    ApiKeyService,
    ApiKeyCrudService,
    ApiKeyModelAction,
  ],
  exports: [ApiKeyService], // what other modules may inject
})
export class ApiKeyModule {}
