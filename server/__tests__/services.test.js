import request from 'supertest';
import faker from 'faker-br';
import app from '~/app';
import clearDatabase from './utils/clearDatabase';
import seeds from './utils/seeds';

describe('services', () => {
  beforeEach(async () => {
    await clearDatabase();
  });

  test('should be able to create service', async () => {
    const response = await request(app)
      .post('/api/services')
      .send({
        name: faker.name.findName(),
        time: faker.random.number(120),
      });

    expect(response.status).toBe(200);
  });

  test('should be able to edit service', async () => {
    const service = await seeds.createService();
    const response = await request(app)
      .put(`/api/services/${service.id}`)
      .send({ name: faker.name.findName(), time: faker.random.number(120) });
    expect(response.status).toBe(200);
  });
});
