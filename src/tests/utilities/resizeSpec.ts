
import fs from 'fs';
import path from 'path';
import { resize } from '../../utilities/resize';

describe('Resize Utility function', () => {
  afterAll(async() => {

  })
  it('Should call sharp module to resize image', async() => {
    const image: string = "fjord";
    const height: number = 200;
    const width: number =  300;
    const localImage: string = path.join(
      __dirname,
      '../../../images',
      `${image}.jpg`
    );
    await resize(image,width, height);
    const outputfile = `./public/thumbnail/${image}${width}x${height}.jpg`;
    
  })
});