import Joi from 'joi';
import { Http400Error } from './httpErrors';

/**
 * Utility helper for Joi validation.
 *
 * @param   {object}  data
 * @param   {object}  schema
 * @returns {Promise}
 */
function validate(data, schema) {
  return Joi.validate(data, schema, { abortEarly: false }, err => {
    if (err) {
      return Promise.reject(new Http400Error(err, true));
    }

    return Promise.resolve(null);
  });
}

export default validate;
