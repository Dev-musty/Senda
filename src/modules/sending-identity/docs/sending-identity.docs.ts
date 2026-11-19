// OpenAPI (Swagger) decorators for the sending identity endpoints, kept out of the
// controller so it stays readable. One static method per endpoint.
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export class SendingIdentityDocs {
  static Create() {
    return applyDecorators(
      ApiOperation({ summary: 'Create a sending identity' }),
      ApiResponse({ status: 201, description: 'SendingIdentity created' }),
      ApiResponse({ status: 400, description: 'Validation failed' }),
    );
  }

  static FindAll() {
    return applyDecorators(
      ApiOperation({ summary: 'List all sending identity records' }),
      ApiResponse({ status: 200, description: 'List of sending identity records' }),
    );
  }

  static FindOne() {
    return applyDecorators(
      ApiOperation({ summary: 'Get a sending identity by id' }),
      ApiResponse({ status: 200, description: 'The sending identity' }),
      ApiResponse({ status: 404, description: 'SendingIdentity not found' }),
    );
  }

  static Update() {
    return applyDecorators(
      ApiOperation({ summary: 'Update a sending identity' }),
      ApiResponse({ status: 200, description: 'SendingIdentity updated' }),
      ApiResponse({ status: 404, description: 'SendingIdentity not found' }),
    );
  }

  static Remove() {
    return applyDecorators(
      ApiOperation({ summary: 'Delete a sending identity' }),
      ApiResponse({ status: 200, description: 'SendingIdentity deleted' }),
      ApiResponse({ status: 404, description: 'SendingIdentity not found' }),
    );
  }
}
