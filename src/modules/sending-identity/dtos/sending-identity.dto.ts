import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

// DTOs describe request bodies: validation (class-validator) + docs (ApiProperty)
// TODO(template): replace with the real fields
export class CreateSendingIdentityDto {
  @ApiProperty({ example: 'Example name', description: 'Name' })
  @IsString()
  @IsNotEmpty()
  name!: string;
}

export class UpdateSendingIdentityDto extends PartialType(CreateSendingIdentityDto) {}
