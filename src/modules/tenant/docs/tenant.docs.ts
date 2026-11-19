// OpenAPI (Swagger) decorators for the tenant endpoints, kept out of the
// controller so it stays readable. One static method per endpoint.
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export class TenantDocs {
  static Create() {
    return applyDecorators(
      ApiOperation({ summary: 'Create a tenant' }),
      ApiResponse({ status: 201, description: 'Tenant created' }),
      ApiResponse({ status: 400, description: 'Validation failed' }),
    );
  }

  static FindAll() {
    return applyDecorators(
      ApiOperation({ summary: 'List all tenant records' }),
      ApiResponse({ status: 200, description: 'List of tenant records' }),
    );
  }

  static FindOne() {
    return applyDecorators(
      ApiOperation({ summary: 'Get a tenant by id' }),
      ApiResponse({ status: 200, description: 'The tenant' }),
      ApiResponse({ status: 404, description: 'Tenant not found' }),
    );
  }

  static Update() {
    return applyDecorators(
      ApiOperation({ summary: 'Update a tenant' }),
      ApiResponse({ status: 200, description: 'Tenant updated' }),
      ApiResponse({ status: 404, description: 'Tenant not found' }),
    );
  }

  static Remove() {
    return applyDecorators(
      ApiOperation({ summary: 'Delete a tenant' }),
      ApiResponse({ status: 200, description: 'Tenant deleted' }),
      ApiResponse({ status: 404, description: 'Tenant not found' }),
    );
  }
}
