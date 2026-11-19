import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantController } from './tenant.controller.js';
import { TenantService } from './tenant.service.js';
import { TenantModelAction } from './model-actions/tenant-model-action.js';
import { TenantModel } from './models/tenant.model.js';
import { TenantCrudService } from './services/tenant-crud.service.js';

// The module wires this feature together: it registers the model with
// TypeORM, and declares the controller and the providers (main service,
// sub-services and model action). Register it in app.module.ts (nest-kit does
// this for you).
@Module({
  imports: [TypeOrmModule.forFeature([TenantModel])],
  controllers: [TenantController],
  providers: [
    TenantService,
    TenantCrudService,
    TenantModelAction,
  ],
  exports: [TenantService], // what other modules may inject
})
export class TenantModule {}
