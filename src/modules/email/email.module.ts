import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailController } from './email.controller.js';
import { EmailService } from './email.service.js';
import { EmailModelAction } from './model-actions/email-model-action.js';
import { EmailModel } from './models/email.model.js';
import { EmailCrudService } from './services/email-crud.service.js';

// The module wires this feature together: it registers the model with
// TypeORM, and declares the controller and the providers (main service,
// sub-services and model action). Register it in app.module.ts (nest-kit does
// this for you).
@Module({
  imports: [TypeOrmModule.forFeature([EmailModel])],
  controllers: [EmailController],
  providers: [
    EmailService,
    EmailCrudService,
    EmailModelAction,
  ],
  exports: [EmailService], // what other modules may inject
})
export class EmailModule {}
