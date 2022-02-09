
import fs from 'fs';
import path from 'path';
import { resize } from '../../utilities/resize';

const fileExists = (file: string) => {
  try{
    fs.accessSync(file, fs.constants.F_OK)
    return true;
  } catch(err) {
    return false;
  }
};

describe('Test the image resize function', () => {
  const filename = 'fjord';
  const width = 200;
  const height = 200;
  const fjord = `${filename}`
  const expectedImageFilepath = path.join(__dirname, '../../../images', `${filename}-${width}-${height}.jpg`);

  afterAll(() => {
    try {
      fs.unlinkSync(expectedImageFilepath);
      
    } catch(err) {
      console.log(err)
    }
  });

  it('should resize image passed to the function', async () => {
    await resize(filename, width, height, fjord);
    const isFilePresent = fileExists(expectedImageFilepath);

    expect(isFilePresent).toBeTruthy();
  })
})