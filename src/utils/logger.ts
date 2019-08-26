import fs from "fs";
import winston, { format } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

import config from "../config";

const defaultLevel = process.env.LOG_LEVEL;
if (!fs.existsSync(config.APP.LOG_DIR)) {
    fs.mkdirSync(config.APP.LOG_DIR);
}

const options = {
    exitOnError: false,
    level: defaultLevel,
    transports: [
        new winston.transports.Console({
            format: format.combine(format.colorize(), format.simple()),
            level: "info"
        }),
        new DailyRotateFile({
            format: format.combine(format.timestamp(), format.json()),
            maxFiles: "14d",
            level: config.APP.LOG_LEVEL,
            dirname: config.APP.LOG_DIR,
            datePattern: "YYYY-MM-DD",
            filename: "%DATE%-debug.log"
        })
    ],
};

const logger = winston.createLogger(options);

export { logger };
