const winston = require('winston');
require('winston-daily-rotate-file');
require('date-utils');

const debug = require('debug')('dashboard:common:loggerFactory');

function logTemplateFunction (info) {
    return `${new Date().toFormat('YYYY-MM-DD HH24:MI:SS')} [${info.level.toUpperCase()}] - ${info.message}`
}

const loggerOpts = {
    level: process.env.LOG_LEVEL,
    transports: [
        new winston.transports.DailyRotateFile({
            filename: process.env.LOG_FILE_PATH,
            zippedArchive: true,
            format: winston.format.printf(logTemplateFunction)
        }),
        // 콘솔 출력
        new winston.transports.Console({
            format: winston.format.printf(logTemplateFunction)
        })
    ]
};

const winstonLogger = winston.createLogger(loggerOpts);
winstonLogger.info(`init LoggerFactory (log level : ${loggerOpts.level})`);

module.exports = {
    logger : winstonLogger,
    stream : {
        write: function(message, encoding){
            winstonLogger.info(message.trim());
        }
    }
};