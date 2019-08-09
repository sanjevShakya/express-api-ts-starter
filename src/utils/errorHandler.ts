import { Response, NextFunction } from "express";
import { HttpClientError, Http404Error, Http400Error } from "./httpErrors";
import httpStatusCodes from "http-status-codes";

export const notFoundError = () => {
    throw new Http404Error();
};

const formatJoiValidationError = (err) => {
    try {
        const error = JSON.parse(err);

        return {
            code: httpStatusCodes.BAD_REQUEST,
            message: httpStatusCodes.getStatusText(httpStatusCodes.BAD_REQUEST),
            details: (error.details || []).map(errDetail => ({ message: errDetail.message, param: errDetail.path.join(".") }))
        };
    } catch (err) {
        return {
            code: httpStatusCodes.BAD_REQUEST,
            message: httpStatusCodes.getStatusText(httpStatusCodes.BAD_REQUEST),
        };
    }

};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
    if (err instanceof HttpClientError) {
        console.warn(err);
        if (err instanceof Http400Error && err.isJoi) {
            res.status(err.statusCode).send(formatJoiValidationError(err.message));
        }

        res.status(err.statusCode).send(err.message);
    } else {
        next(err);
    }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
    console.error(err);
    const INTERNAL_SERVER_ERROR = httpStatusCodes.INTERNAL_SERVER_ERROR;
    if (process.env.NODE_ENV === "production") {
        res.status(INTERNAL_SERVER_ERROR).send(httpStatusCodes.getStatusText(INTERNAL_SERVER_ERROR));
    } else {
        res.status(INTERNAL_SERVER_ERROR).send(err.stack);
    }
};
