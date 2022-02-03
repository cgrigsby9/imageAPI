//processImage.ts - image processing module
const sharp = require("sharp");

export async function resize(
  path: string,
  width: number,
  height: number,
  name: string,
  
) {
  //Resize file using sharp
  await sharp(path)
    .resize({
      width: width,
      height: height,
    })
    .toFile(`${name}_${width}_${height}.jpg`)
};


    