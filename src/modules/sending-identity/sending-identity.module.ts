import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendingIdentityController } from './sending-identity.controller.js';
import { SendingIdentityService } from './sending-identity.service.js';
import { SendingIdentityModelAction } from './model-actions/sending-identity-model-action.js';
import { SendingIdentityModel } from './models/sending-identity.model.js';
import { SendingIdentityCrudService } from './services/sending-identity-crud.service.js';

// The module wires this feature together: it registers the model with
// TypeORM, and declares the controller and the providers (main service,
// sub-services and model action). Register it in app.module.ts (nest-kit does
// this for you).
@Module({
  imports: [TypeOrmModule.forFeature([SendingIdentityModel])],
  controllers: [SendingIdentityController],
  providers: [
    SendingIdentityService,
    SendingIdentityCrudService,
    SendingIdentityModelAction,
  ],
  exports: [SendingIdentityService], // what other modules may inject
})
export class SendingIdentityModule {}
