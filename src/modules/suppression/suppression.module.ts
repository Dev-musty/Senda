import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppressionController } from './suppression.controller.js';
import { SuppressionService } from './suppression.service.js';
import { SuppressionModelAction } from './model-actions/suppression-model-action.js';
import { SuppressionModel } from './models/suppression.model.js';
import { SuppressionCrudService } from './services/suppression-crud.service.js';

// The module wires this feature together: it registers the model with
// TypeORM, and declares the controller and the providers (main service,
// sub-services and model action). Register it in app.module.ts (nest-kit does
// this for you).
@Module({
  imports: [TypeOrmModule.forFeature([SuppressionModel])],
  controllers: [SuppressionController],
  providers: [
    SuppressionService,
    SuppressionCrudService,
    SuppressionModelAction,
  ],
  exports: [SuppressionService], // what other modules may inject
})
export class SuppressionModule {}
