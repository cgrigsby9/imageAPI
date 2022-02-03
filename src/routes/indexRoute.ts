import express from 'express'
import router from './Controller'


const routes = express.Router();


routes.get('/', (req, res) => {
    res.send('connected!');
});

routes.use('/encenada', router);

export default routes;