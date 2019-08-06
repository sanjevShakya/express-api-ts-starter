import { createConnection, ConnectionOptions, getConnectionOptions } from 'typeorm';

function initializeDb() {
  return getConnectionOptions().then(connectionOptions => {
    return createConnection(connectionOptions as ConnectionOptions )
  })
}

export default initializeDb;
