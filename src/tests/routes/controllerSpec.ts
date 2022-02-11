import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);
describe('Test images endpoint response', () => {
  it('gets the image api endpoint', async () => {
    const response = await request.get('?name=fjord&width=200&height=200');

    expect(response.status).toBe(200);
  });
});