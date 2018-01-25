const winston = require('winston');

winston.add(winston.transports.File,
        {
            filename: './test.log',
            level: 'info',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            colorize: false
        }
);

module.exports = function (req, res, next) {
    next()
};
