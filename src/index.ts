import bodyParser from 'body-parser';
import express from 'express';
import figlet from 'figlet';
import path from 'path';

import appRouter from './routes/app';
import apiRouter from './routes/api';

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(import.meta.dir, 'views'));
app.locals.basedir = app.get('views');

app.use(express.static(path.join(import.meta.dir, '..', 'assets')));

app.use('/', bodyParser.urlencoded({ extended: true }), appRouter);
app.use('/api', bodyParser.json(), apiRouter);

const welcomeMessage = figlet.textSync('Clocking App');
console.log(welcomeMessage, 'v0.1');

app.listen(PORT, () => {
  console.log('');
  console.log(`Server is running at http://localhost:${PORT}`);
});
