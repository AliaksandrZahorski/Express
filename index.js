const http = require('http');
const Express = require('express');

const app = new Express();
const server = new http.Server(app);
const router = Express.Router();

const port = process.env.PORT || 8080;

app.set(port);

router.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); 
});

router.get('/*', (req, res) => {
  res.json({ ThothSays: 'Greetings to you, mortal!' });
});

app.use('/', router);

server.listen(port, (err) => {
  console.log(`Application running...`);
  if (err) {
    return console.log(err);
  }
  console.log(`Application running on http://localhost:${port}`);
});
