import express from 'express';
import { Router, Request, Response } from 'express';
import { resize } from '../utilities/resize';
const app = express();
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const router: Router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  const image = req.query.name as string;
  const widthString = req.query.width;
  const heightString = req.query.height;
  const widthNum = Number(widthString);
  const heightNum = Number(heightString);

  const localImage: string = path.join(
    __dirname,
    '../../images',
    `${image}.jpg`
  );
  const newImage: string = path.join(
    __dirname,
    '../../resized',
    `${image}_${widthNum}_${heightNum}.jpg`
  );
  const resizedImage: string = path.join(
    __dirname,
    '../../',
    `${image}_${widthNum}_${heightNum}.jpg`
  );
  if (fs.existsSync(newImage)) {
    res.sendFile(newImage);
} else {
    try {
  await resize(image, widthNum, heightNum);
  await fsPromises
    .copyFile(resizedImage, newImage)
    .then(function () {
      fs.unlink(resizedImage, (err: any) => {
        if (err) {
          res.send("check URL for correct inputs")
          return;
        } else {
          console.log(`saved file: ${resizedImage}`);
        }
      });
    })
    .catch(function (error: any): void {
      res.send('check URL for correct inputs example: fjord&width=100&height=100')
    });
} catch (err) {
  res.send('Check URL for correct inputs example: fjord&width=100&height=100')
}
res.sendFile(newImage);
}
});
export default router;
