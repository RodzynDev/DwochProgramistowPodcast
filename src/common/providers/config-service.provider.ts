import { ConfigModule } from '@nestjs/config';

// TODO add env validation
export const ConfigService = ConfigModule.forRoot({
  isGlobal: true,
});
