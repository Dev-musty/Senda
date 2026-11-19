// OpenAPI (Swagger) decorators for the api key endpoints, kept out of the
// controller so it stays readable. One static method per endpoint.
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export class ApiKeyDocs {
  static Create() {
    return applyDecorators(
      ApiOperation({ summary: 'Create a api key' }),
      ApiResponse({ status: 201, description: 'ApiKey created' }),
      ApiResponse({ status: 400, description: 'Validation failed' }),
    );
  }

  static FindAll() {
    return applyDecorators(
      ApiOperation({ summary: 'List all api key records' }),
      ApiResponse({ status: 200, description: 'List of api key records' }),
    );
  }

  static FindOne() {
    return applyDecorators(
      ApiOperation({ summary: 'Get a api key by id' }),
      ApiResponse({ status: 200, description: 'The api key' }),
      ApiResponse({ status: 404, description: 'ApiKey not found' }),
    );
  }

  static Update() {
    return applyDecorators(
      ApiOperation({ summary: 'Update a api key' }),
      ApiResponse({ status: 200, description: 'ApiKey updated' }),
      ApiResponse({ status: 404, description: 'ApiKey not found' }),
    );
  }

  static Remove() {
    return applyDecorators(
      ApiOperation({ summary: 'Delete a api key' }),
      ApiResponse({ status: 200, description: 'ApiKey deleted' }),
      ApiResponse({ status: 404, description: 'ApiKey not found' }),
    );
  }
}
