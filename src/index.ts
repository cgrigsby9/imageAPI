import express from 'express';
import router from './routes/Controller'
// import routes from './routes/indexRoute';

const app = express();
const port = 3000;

app.use('/', router);

   app.listen(port, ()=> {
    console.log(`server started at localhost:${port}`)
   });