import { createConnection, ConnectionOptions, DatabaseType } from 'typeorm';

import config from './config';

const connectionConfig = {
  type: config.DATABASE.TYPE as DatabaseType,
  host: config.DATABASE.HOST,
  port: config.DATABASE.PORT,
  username: config.DATABASE.USER,
  password: config.DATABASE.PASSWORD,
  database: config.DATABASE.NAME,
  entities: [
    __dirname + '/../**/*.model{.ts,.js}',
  ],
  synchronize: false,
  cli: {
    migrationsDir: 'src/migrations',
  }
}

export const connection = createConnection(connectionConfig as ConnectionOptions);
