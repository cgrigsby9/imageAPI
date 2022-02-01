import express from 'express'
import encenada from './encenada'


const routes = express.Router();


routes.get('/', (req, res) => {
    res.send('connected!');
});

routes.use('/encenada', encenada);

export default routes;