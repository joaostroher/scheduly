import request from 'supertest';
import faker from 'faker-br';
import app from '~/app';
import clearDatabase from './utils/clearDatabase';
import seeds from './utils/seeds';

describe('customers', () => {
  beforeEach(async () => {
    await clearDatabase();
  });

  test('should be able to create customer', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
      });

    expect(response.status).toBe(200);
    // expect(response.body.status).toEqual('created customer');
  });
  /*
  test('should be able to edit customer', async () => {
    const customer = await seeds.createCustomer();
    const response = await request(app)
      .put(`/api/customers/${customer.id}`)
      .send({ ...customer, name: faker.name.findName() });
    expect(response.status).toBe(200);
    // expect(response.body.status).toEqual('edited customer');
  });

  test('should be return error when fields are already in use', async () => {
    const customer = await seeds.createCustomer();
    const response = await request(app)
      .post('/api/customers')
      .send(customer);
    expect(response.status).toBe(200);
    // expect(response.body.status).toEqual('edited customer');
  });

  test('should be return error when invalid cpf informated', async () => {
    const customer = await seeds.createCustomer();
    const response = await request(app)
      .put(`/api/customers/${customer.id}`)
      .send({ ...customer, cpf: faker.br.cpf() });
    expect(response.status).toBe(200);
    // expect(response.body.status).toEqual('edited customer');
  });

  test('should be return error when invalid phone informated', async () => {
    const customer = await seeds.createCustomer();
    const response = await request(app)
      .put(`/api/customers/${customer.id}`)
      .send({ ...customer, phone: faker.phone.phoneNumber() });
    expect(response.status).toBe(200);
    // expect(response.body.status).toEqual('edited customer');
  });
  */
});
