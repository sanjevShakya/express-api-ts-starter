import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

import validate from '../../utils/validate';

const SCHEMA = {
  username: Joi.string().label('username').max(90).required(),
  email: Joi.string().label('email').max(90).email().required(),
}

function userValidator(req: Request, res: Response, next: NextFunction) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err))
}

export { userValidator }
