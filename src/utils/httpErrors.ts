import httpStatusCodes from "http-status-codes";

export abstract class HttpClientError extends Error {
    public readonly statusCode!: number;
    public readonly name!: string;

    constructor(message: object | string) {
        if(message instanceof Object) {
            super(JSON.stringify(message));
        } else {
            super(message);
        }

        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class Http400Error extends HttpClientError {
    readonly statusCode = httpStatusCodes.BAD_REQUEST;
    public isJoi = false;

    constructor(message: string | object = httpStatusCodes.getStatusText(httpStatusCodes.BAD_REQUEST), isJoi: boolean = false) {
        super(message);
        this.isJoi = isJoi;
    }
}

export class Http404Error extends HttpClientError {
    readonly statusCode = httpStatusCodes.NOT_FOUND;

    constructor(message: string | object = httpStatusCodes.getStatusText(httpStatusCodes.NOT_FOUND)) {
        super(message);
    }
}

export class Http405Error extends HttpClientError {

}
