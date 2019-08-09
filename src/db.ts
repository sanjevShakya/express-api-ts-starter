import { createConnection, ConnectionOptions, getConnectionOptions } from "typeorm";
import { CustomNamingStrategy } from "./utils/customNamingStrategy";

function initializeDb() {
    return getConnectionOptions().then((connectionOptions: ConnectionOptions) => {

        return createConnection(Object.assign(connectionOptions, { namingStrategy: new CustomNamingStrategy() }));
    });
}

export default initializeDb;
