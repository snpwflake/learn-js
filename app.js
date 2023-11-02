import express from 'express';
import fs from 'fs';

import postRouter from './public/routes/post.routes.js';
import userRouter from './public/routes/users.routes.js';
import loginRouter from './public/routes/login.routes.js';

const app = express();
const port = 8080;
const html = fs.readFileSync('public/main.html', 'utf8');
app.use(express.static('public'));
app.use(express.json());
app.get('/', (req, res) => res.type('html').send(html));

app.use('/api', userRouter);

app.use('/api', postRouter);

app.use('/api', loginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
