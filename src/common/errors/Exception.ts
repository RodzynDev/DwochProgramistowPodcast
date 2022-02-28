import { HttpException } from '@nestjs/common';
import { LogLevel } from '@nestjs/common/services/logger.service';
import { v4 as uuid } from 'uuid';

export class Exception extends HttpException {
  private static readonly STATUS: number = 500;
  private static readonly LEVEL: LogLevel = `error`;
  private readonly uuid: string;

  constructor(message: string | Record<string, any>) {
    super(message, Exception.STATUS);
    this.uuid = uuid();
  }

  getLevel(): LogLevel {
    return Exception.LEVEL;
  }

  getUuid(): string {
    return this.uuid;
  }
}
