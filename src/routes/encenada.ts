import express from 'express'
const sharp = require("sharp");
import { resizeImage } from '../utilities/app'

const resize = resizeImage();
const app = express();
const encenada = express.Router();



encenada.get("/", (req, res) => {
    res.sendfile(`encenadaport-resized.jpg`)
});

export default encenada

    