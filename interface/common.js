const debug = require('debug')('dashboard:interface:common');

function getResult (req) {

}

module.exports = {
    logger : winstonLogger,
    stream : {
        write: function(message, encoding){
            winstonLogger.info(message.trim());
        }
    }
};