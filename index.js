const http = require('http');
const Express = require('express');
const log = require('./src/lib/log');
const logger = require('winston');

const favicon = require('serve-favicon');


const app = new Express();
const server = new http.Server(app);
const router = Express.Router();

const port = process.env.PORT || 8080;

app.set(port);
app.set('view engine', 'pug');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(log);

// router.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });
//
router.get('/blogs', (req, res) => {
  res.json({ ThothSays: 'GET /blogs' });
});

router.get('/blogs/:id', (req, res) => {
  res.json({ ThothSays: `GET /blogs/${req.params.id}` });
});

router.post('/blogs', (req, res) => {
  res.json({ ThothSays: 'POST /blogs' });
});

router.put('/blogs/:id', (req, res) => {
  res.json({ ThothSays: `PUT /blogs/${req.params.id}` });
});

router.delete('/blogs/:id', (req, res) => {
  res.json({ ThothSays: `DELETE /blogs/${req.params.id}` });
});

router.get('/*', (req, res) => {
  logger.info(req.method, req.url);
  res.render(
        'index',
        { title: 'ThothSays', message: 'Greetings to you, mortal!'}
      );
});

app.use('/', router);

server.listen(port, (err) => {
  console.log(`Application running...`);
  if (err) {
    return console.log(err);
  }
  console.log(`Application running on http://localhost:${port}`);
});
