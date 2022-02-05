import {resize} from '../../utilities/resize';

describe('Resize Utility function', () => {
    afterAll(async() => {
  
    })
    it('Should call sharp module to resize image', async(done) => {
      const image = "encenadaport";
      const width = 200;
      const height =  300;
      const localImage = `${image}`
      await resize(localImage, width, height, image);
      const outputfile = `./resized/${image}${width}x${height}.jpg`;
      done()
    })
  });
