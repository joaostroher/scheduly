import request from 'supertest';
import faker from 'faker-br';
import app from '~/app';
import clearDatabase from './utils/clearDatabase';
import seeds from './utils/seeds';
import runAsync from './utils/runAsync';

describe('customers', () => {
  beforeEach(
    runAsync(async () => {
      await clearDatabase();
    })
  );

  test('should be able to create customer', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
      });

    expect(response.status).toBe(200);
  });

  test('should be able to edit customer', async () => {
    const customer = await seeds.createCustomer();

    const response = await request(app)
      .put(`/api/customers/${customer.id}`)
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
      });

    expect(response.status).toBe(200);
  });

  test('should be able to delete customer', async () => {
    const customer = await seeds.createCustomer();

    const response = await request(app).delete(`/api/customers/${customer.id}`);

    expect(response.status).toBe(200);
  });

  test('should return error when invalid cpf informated', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        cpf: '111',
      });

    expect(response.status).not.toBe(200);
  });

  test('should return error when invalid email informated', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: 'teste.com',
      });

    expect(response.status).not.toBe(200);
  });

  test('should return error when invalid phone informated', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: '111',
      });

    expect(response.status).not.toBe(200);
  });

  test('should return a list of customers', async () => {
    const response = await request(app).get('/api/customers');

    expect(response.status).toBe(200);
  });

  test('should return a unfilled name error', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        email: faker.internet.email(),
      });

    expect(response.status).not.toBe(200);
  });

  test('should return a unfilled email error', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
      });

    expect(response.status).not.toBe(200);
  });

  test('should return a duplicate cpf error', async () => {
    const cpf = '11111111111';

    await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        cpf,
      });

    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        cpf,
      });

    expect(response.status).not.toBe(200);
  });

  test('should return a duplicate email error', async () => {
    const email = 'teste@email.com';

    await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email,
      });

    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email,
      });

    expect(response.status).not.toBe(200);
  });

  test('should return a duplicate phone error', async () => {
    const phone = '51999999999';

    await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone,
      });

    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone,
      });

    expect(response.status).not.toBe(200);
  });

  test('should return a unexists customer error', async () => {
    const response = await request(app)
      .put(`/api/customers/${9999999}`)
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
      });

    expect(response.status).not.toBe(200);
  });
});
