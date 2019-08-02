import { createConnection, ConnectionOptions, DatabaseType } from 'typeorm';
import models from './services/models';

import config from './config';

const connectionConfig = {
  type: config.DATABASE.TYPE as DatabaseType,
  host: config.DATABASE.HOST,
  port: config.DATABASE.PORT,
  username: config.DATABASE.USER,
  password: config.DATABASE.PASSWORD,
  database: config.DATABASE.NAME,
  entities: models,
  synchronize: true,
}

export const connection = createConnection(connectionConfig as ConnectionOptions);
