// OpenAPI (Swagger) decorators for the email endpoints, kept out of the
// controller so it stays readable. One static method per endpoint.
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export class EmailDocs {
  static Create() {
    return applyDecorators(
      ApiOperation({ summary: 'Create a email' }),
      ApiResponse({ status: 201, description: 'Email created' }),
      ApiResponse({ status: 400, description: 'Validation failed' }),
    );
  }

  static FindAll() {
    return applyDecorators(
      ApiOperation({ summary: 'List all email records' }),
      ApiResponse({ status: 200, description: 'List of email records' }),
    );
  }

  static FindOne() {
    return applyDecorators(
      ApiOperation({ summary: 'Get a email by id' }),
      ApiResponse({ status: 200, description: 'The email' }),
      ApiResponse({ status: 404, description: 'Email not found' }),
    );
  }

  static Update() {
    return applyDecorators(
      ApiOperation({ summary: 'Update a email' }),
      ApiResponse({ status: 200, description: 'Email updated' }),
      ApiResponse({ status: 404, description: 'Email not found' }),
    );
  }

  static Remove() {
    return applyDecorators(
      ApiOperation({ summary: 'Delete a email' }),
      ApiResponse({ status: 200, description: 'Email deleted' }),
      ApiResponse({ status: 404, description: 'Email not found' }),
    );
  }
}
