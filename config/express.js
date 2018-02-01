let bodyParser = require('body-parser');
let express = require('express');
let morgan = require('morgan');
let fs = require('fs')
let path = require('path');
let appDir = path.dirname(require.main.filename);
let blogRoutes = require('../app/blog.routes');
let defaultRoutes = require('../app/default.routes');
const favicon = require('serve-favicon');

let logStream = fs.createWriteStream(path.join(appDir, 'access.log'), {flags: 'a'});
const BASE_PATH = '/';

module.exports = () => {
  let app = express();

  app.use(morgan('combined', {stream: logStream}));
  app.use(morgan('dev'));
  app.set('view engine', 'pug'); 
  app.use(favicon(path.join(appDir, '/public/favicon.ico')));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(`${BASE_PATH}blogs`, blogRoutes);
  app.use(`${BASE_PATH}*`, defaultRoutes);

  return app;
};
