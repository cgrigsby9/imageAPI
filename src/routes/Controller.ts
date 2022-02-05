import express from "express";
import { Router, Request, Response } from "express";
import { resize } from "../utilities/resize";
const app = express();
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const image = req.query.name as string;
  const widthString = req.query.width;
  const heightString = req.query.height;
  const widthNum = Number(widthString);
  const heightNum = Number(heightString);

  const localImage: string = path.join(__dirname, "../../images", `${image}.jpg`);
  const newImage: string = path.join(
    __dirname,
    "../../resized",
    `${image}_${widthNum}_${heightNum}.jpg`
  );
  const resizedImage: string = path.join(
    __dirname,
    "../../",
    `${image}_${widthNum}_${heightNum}.jpg`
  );
  if (fs.existsSync(newImage)) {
    console.log(`Image exists, sending: ${newImage}`);
    res.sendFile(newImage);
  } else {
    console.log(`Image created, sending: ${newImage}`);
    try {
      await resize(localImage, widthNum, heightNum, image);
      await fsPromises
        .copyFile(resizedImage, newImage)
        .then(function () {
          fs.unlink(resizedImage, (err: any) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log(`deleted file: ${resizedImage}`);
            }
          });
        })
        .catch(function (error: any): void {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
    res.sendFile(newImage);
  }
});
export default router;
