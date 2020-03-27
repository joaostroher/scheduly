import app from '~/app';
import request from 'supertest';

describe('example test', () => {
  test('should be able to response test: true on GET /', async done => {
    const response = await request(app).get('/api/');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('test', true);
    //done();
  });
});
