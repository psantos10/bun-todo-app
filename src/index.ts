import express from 'express';
import figlet from 'figlet';

import appRouter from './routes/app';
import apiRouter from './routes/api';

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use('/', appRouter);
app.use('/api', apiRouter);

const welcomeMessage = figlet.textSync('Clocking App');
console.log(welcomeMessage, 'v0.1');

app.listen(PORT, () => {
  console.log('');
  console.log(`Server is running at http://localhost:${PORT}`);
});
