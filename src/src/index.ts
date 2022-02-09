import express from 'express';
import router from './routes/Controller';

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;