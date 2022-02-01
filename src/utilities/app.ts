import express from 'express'
const sharp = require("sharp");

const app = express();
const encenada = express.Router();
const path = require("path");



export async function resizeImage() {
    const input = express.Router();
  try {
    await sharp()
      .resize({
        width: 197,
        height: 57
      })
      .toFile(path.join(__dirname, `encenadaport-resized.jpg`));
  } catch (error) {
    console.log(error);
  }
};


    