//processImage.ts - image processing module
const sharp = require('sharp');
import path from 'path';


export async function resize(
  image: string,
  width: number,
  height: number,
  
): Promise<void> {
  //Resize file using sharp
  const fullImageFilepath = path.join(__dirname, '../../images', `${image}.jpg`)
  await sharp(fullImageFilepath)
    .resize({
      width: width,
      height: height,
    })
    .toFile(`${image}_${width}_${height}.jpg`);
}
