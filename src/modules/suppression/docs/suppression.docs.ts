// OpenAPI (Swagger) decorators for the suppression endpoints, kept out of the
// controller so it stays readable. One static method per endpoint.
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export class SuppressionDocs {
  static Create() {
    return applyDecorators(
      ApiOperation({ summary: 'Create a suppression' }),
      ApiResponse({ status: 201, description: 'Suppression created' }),
      ApiResponse({ status: 400, description: 'Validation failed' }),
    );
  }

  static FindAll() {
    return applyDecorators(
      ApiOperation({ summary: 'List all suppression records' }),
      ApiResponse({ status: 200, description: 'List of suppression records' }),
    );
  }

  static FindOne() {
    return applyDecorators(
      ApiOperation({ summary: 'Get a suppression by id' }),
      ApiResponse({ status: 200, description: 'The suppression' }),
      ApiResponse({ status: 404, description: 'Suppression not found' }),
    );
  }

  static Update() {
    return applyDecorators(
      ApiOperation({ summary: 'Update a suppression' }),
      ApiResponse({ status: 200, description: 'Suppression updated' }),
      ApiResponse({ status: 404, description: 'Suppression not found' }),
    );
  }

  static Remove() {
    return applyDecorators(
      ApiOperation({ summary: 'Delete a suppression' }),
      ApiResponse({ status: 200, description: 'Suppression deleted' }),
      ApiResponse({ status: 404, description: 'Suppression not found' }),
    );
  }
}
