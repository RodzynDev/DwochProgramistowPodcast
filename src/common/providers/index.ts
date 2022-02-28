import { ConfigService } from './config-service.provider';
import { Database } from './database.provider';
import { ScheduleModule } from '@nestjs/schedule';

export const Providers = [ConfigService, Database, ScheduleModule.forRoot()];
