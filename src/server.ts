import http from "http";
import express from "express";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandler";

import "./env";
import routes from "./routes";
import initializeDb from "./db";
import config from "./config";
import { applyMiddleware, applyRoutes } from "./utils";

const router = express();
const { PORT } = config.APP;
const server = http.createServer(router);

initializeDb()
    .then(() => {
        applyMiddleware(middleware, router);
        applyRoutes(routes, router);
        applyMiddleware(errorHandlers, router);

        server.listen(PORT, () => {
            console.log(`Server is running http://localhost:${PORT}...`);
        });
    });


process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

