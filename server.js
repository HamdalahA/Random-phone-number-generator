import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';

import routes from './server/routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

app.use(express.static('server/'));
app.use(express.static(path.join(__dirname, 'src')));

app.listen(port, () => console.log(`Listening on port ${port}`));


export default app;
