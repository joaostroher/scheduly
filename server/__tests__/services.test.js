import request from 'supertest';
import faker from 'faker-br';
import app from '~/app';
import clearDatabase from './utils/clearDatabase';
import seeds from './utils/seeds';
import runAsync from './utils/runAsync';

describe('services', () => {
  beforeEach(
    runAsync(async () => {
      await clearDatabase();
    })
  );

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

  test('should be able to delete service', async () => {
    const service = await seeds.createService();

    const response = await request(app).delete(`/api/services/${service.id}`);

    expect(response.status).toBe(200);
  });

  test('should return a list of services', async () => {
    const response = await request(app).get('/api/services');

    expect(response.status).toBe(200);
  });

  test('should return a unfilled service error', async () => {
    const response = await request(app)
      .put(`/api/services/${9999999}`)
      .send({ time: faker.random.number(120) });

    expect(response.status).not.toBe(200);
  });

  test('should return a duplicate service error', async () => {
    const data = {
      name: faker.name.findName(),
      time: faker.random.number(120),
    };

    await request(app)
      .post('/api/services')
      .send(data);

    const response = await request(app)
      .post('/api/services')
      .send(data);

    expect(response.status).not.toBe(200);
  });

  test('should return a unexists service error', async () => {
    const response = await request(app)
      .put(`/api/services/${9999999}`)
      .send({ name: faker.name.findName(), time: faker.random.number(120) });

    expect(response.status).not.toBe(200);
  });

  test('should return error when invalid time informated', async () => {
    const response = await request(app)
      .post('/api/services')
      .send({
        name: faker.name.findName(),
        time: 'abc',
      });

    expect(response.status).not.toBe(200);
  });
});
