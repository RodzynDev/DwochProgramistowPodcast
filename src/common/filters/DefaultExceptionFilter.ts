import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Response } from 'express';
import { ApiException, Exception } from '../errors';

const DEFAULT_MESSAGE_FOR_NON_API_ERROR = `API exception expected, but other occurred. Check logs for the details.`;

@Catch(Exception)
export class DefaultExceptionFilter implements ExceptionFilter {
  catch(exception: Exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    Logger[exception.getLevel()](JSON.stringify(exception));

    response.status(exception.getStatus()).json({
      uuid: exception.getUuid(),
      timestamp: new Date().toISOString(),
      level: exception instanceof ApiException ? exception.getLevel() : `error`,
      message: exception instanceof ApiException ? exception.getResponse() : DEFAULT_MESSAGE_FOR_NON_API_ERROR,
    });
  }
}
