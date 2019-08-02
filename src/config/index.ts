
export default {
  APP: {
    SECRET: process.env.APP_SECRET,
    VERSION: process.env.APP_VERSION,
    PORT: process.env.APP_PORT,
    HOST: process.env.APP_HOST
  },
  DATABASE: {
    PORT: process.env.DB_PORT,
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    TYPE: process.env.DB_CLIENT,
  }
}
