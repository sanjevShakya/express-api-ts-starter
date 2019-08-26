
import "../env";

export default {
    APP: {
        SECRET: process.env.APP_SECRET,
        VERSION: process.env.APP_VERSION,
        PORT: process.env.APP_PORT,
        HOST: process.env.APP_HOST,
        LOG_DIR: process.env.LOG_DIR,
        LOG_LEVEL: process.env.LOG_LEVEl,
        NAME: process.env.APP_NAME,
    }
};
