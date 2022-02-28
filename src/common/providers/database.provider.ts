import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const Database = TypeOrmModule.forRootAsync({
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('DATABASE_HOST'),
    port: Number(configService.get<number>('DATABASE_PORT')),
    username: configService.get('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    autoLoadEntities: true,
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true,
  }),
  inject: [ConfigService],
});
