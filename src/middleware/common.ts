import { Router, Express } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";

import config from "../config";

export const setAppPortAndHost = (router: Express) => {
    router.set("port", config.APP.PORT || "3000");
    router.set("host", config.APP.HOST || "0.0.0.0");

    router.locals.title = config.APP.NAME;
    router.locals.version = config.APP.VERSION;
};

export const handleCors = (router: Router) =>
    router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
    router.use(parser.urlencoded({ extended: true }));
    router.use(parser.json());
};

export const handleCompression = (router: Router) => {
    router.use(compression());
};
