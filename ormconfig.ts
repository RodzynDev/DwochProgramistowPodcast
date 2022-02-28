import * as path from 'path';
import * as dotenv from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const env = process.env.NODE_ENV || 'dev';
const dotenv_path = path.resolve(process.cwd(), `.${env}.env`);

dotenv.config({ path: dotenv_path });

export default {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  namingStrategy: new SnakeNamingStrategy(),
  entities: ['src/**/*.entity.ts'],
  migrations: ['data/migrations/*.ts'],
  seeds: ['data/seeds/**/*{.ts,.js}'],
  factories: ['data/factories/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'data/migrations',
  },
};
