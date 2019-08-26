import http from "http";
import express from "express";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandler";

import "./env";
import routes from "./routes";
import initializeDb from "./db";
import config from "./config";
import { applyMiddleware, applyRoutes } from "./utils";
import { logger } from "./utils/logger";

const router = express();
const { PORT } = config.APP;
const server = http.createServer(router);

initializeDb()
    .then(() => {
        applyMiddleware(middleware, router);
        applyRoutes(routes, router);
        applyMiddleware(errorHandlers, router);

        server.listen(PORT, () => {
            logger.info(`Server started at http://${router.get("host")}:${router.get("port")}/api`);
        });
    });


process.on("uncaughtException", e => {
    logger.error("Uncaught exception", e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    logger.error("Unhandled rejection", e);
    process.exit(1);
});

