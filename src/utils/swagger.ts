
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Swagger definition.
 */
const swaggerDefinition = {
  info: {
    title: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    description: process.env.APP_DESCRIPTION
  },
  basePath: '/api'
};

/**
 * Options for the swagger docs.
 */
const swaggerOptions = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: [
    path.join(__dirname, '/../api-docs/*.js'),
    path.join(__dirname, '/../api-docs/*.yml'),
    path.join(__dirname, '/../api-docs/*.yaml')
  ]
};

console.log(swaggerOptions);
/**
 * Initialize swagger-jsdoc.
 */
const swaggerSpec = swaggerJSDoc(swaggerOptions);

console.log('>>>>>>>>>>>>>>>>>>>>>>,', swaggerSpec);

export default swaggerSpec;
