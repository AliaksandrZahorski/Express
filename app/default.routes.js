let router = require('express').Router();

let defaulController = require('./default.controller');

router.get('/', defaulController.anyRequest);

module.exports = router;
