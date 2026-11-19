import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../database/base.model.js';

// Models live in models/ and are picked up by the data-source glob
// (modules/**/models/*). One class per file, named <Thing>Model.
@Entity('emails')
export class EmailModel extends BaseEntity {
  // TODO(template): replace with the real columns
  @Column()
  name!: string;
}
