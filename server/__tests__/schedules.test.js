import request from 'supertest';
import faker from 'faker';
import { Types } from 'mongoose';
import app from '~/app';
import clearDatabase from './utils/clearDatabase';
import seeds from './utils/seeds';
import { isBefore, isEqual, addMinutes, parseISO, toDate } from 'date-fns';
import runAsync from './utils/runAsync';

describe('schedules', () => {
  beforeEach(
    runAsync(async () => {
      await clearDatabase();
    })
  );

  test('should be able to create schedule', async () => {
    const customer = await seeds.createCustomer();
    const service = await seeds.createService();
    const data = {
      date_time_start: faker.date.future(),
      customer_id: customer.id,
      service_id: service.id,
      observation: faker.lorem.paragraph(),
    };
    const response = await request(app)
      .post('/api/schedules')
      .send(data);

    expect(response.status).toBe(200);
    expect(response.body.status).toEqual('scheduled');
  });

  test('should be able to cancel schedule', async () => {
    const schedule = await seeds.createSchedule();
    const response = await request(app)
      .delete(`/api/schedules/${schedule.id}`)
      .send();
    expect(response.status).toBe(200);
    expect(response.body.status).toEqual('canceled');
  });

  test('should be able to block schedule creation in same date time', async () => {
    const schedule = await seeds.createSchedule();
    const { date_time_start, customer_id, service_id, observation } = schedule;
    const response = await request(app)
      .post(`/api/schedules/`)
      .send({ date_time_start, customer_id, service_id, observation });
    expect(response.status).toBe(400);
  });

  test('should be able to block schedule creation in past date time', async () => {
    const customer = await seeds.createCustomer();
    const service = await seeds.createService();
    const data = {
      date_time_start: faker.date.past(),
      customer_id: customer.id,
      service_id: service.id,
      observation: faker.lorem.paragraph(),
    };

    const response = await request(app)
      .post(`/api/schedules/`)
      .send(data);
    expect(response.status).toBe(400);
  });

  test('should be able to block schedule creation with invalid customer_id', async () => {
    const service = await seeds.createService();
    const data = {
      date_time_start: faker.date.future(),
      customer_id: Types.ObjectId(),
      service_id: service.id,
      observation: faker.lorem.paragraph(),
    };

    const response = await request(app)
      .post(`/api/schedules/`)
      .send(data);
    expect(response.status).toBe(400);
  });

  test('should be able to block schedule creation with invalid service_id', async () => {
    const customer = await seeds.createCustomer();
    const data = {
      date_time_start: faker.date.future(),
      customer_id: customer.id,
      service_id: Types.ObjectId(),
      observation: faker.lorem.paragraph(),
    };

    const response = await request(app)
      .post(`/api/schedules/`)
      .send(data);
    expect(response.status).toBe(400);
  });

  test('should be able to list schedules', async () => {
    const schedule1 = await seeds.createSchedule();
    const schedule2 = await seeds.createSchedule();
    const schedule3 = await seeds.createSchedule();
    const response = await request(app).get(`/api/schedules`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ _id: String(schedule1._id) }),
        expect.objectContaining({ _id: String(schedule2._id) }),
        expect.objectContaining({ _id: String(schedule3._id) }),
      ])
    );
  });

  test('should be able to list schedules with status scheduled', async () => {
    const schedule = await seeds.createSchedule();
    const response = await request(app).get(`/api/schedules`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          _id: String(schedule._id),
          status: 'scheduled',
        }),
      ])
    );
  });

  test('should be able to list schedules with status canceled', async () => {
    const schedule = await seeds.createSchedule({ status: 'canceled' });
    const response = await request(app).get(`/api/schedules`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          _id: String(schedule._id),
          status: 'canceled',
        }),
      ])
    );
  });
  test('should be able to list schedules in datetime order', async () => {
    const schedules = [
      await seeds.createSchedule(),
      await seeds.createSchedule(),
      await seeds.createSchedule(),
    ];
    const response = await request(app).get(`/api/schedules`);
    expect(response.status).toBe(200);
    expect(
      response.body.every(
        (val, i, arr) =>
          !i ||
          isBefore(
            parseISO(val.date_time_start),
            parseISO(arr[i - 1].date_time_start)
          ) ||
          isEqual(
            parseISO(val.date_time_start),
            parseISO(arr[i - 1].date_time_start)
          )
      )
    );
  });

  test('should be able to create schedule with big description', async () => {
    const customer = await seeds.createCustomer();
    const service = await seeds.createService();
    const data = {
      date_time_start: faker.date.future(),
      customer_id: customer.id,
      service_id: service.id,
      observation: faker.lorem.paragraphs(),
    };
    const response = await request(app)
      .post('/api/schedules')
      .send(data);

    expect(response.status).toBe(200);
    expect(response.body.status).toEqual('scheduled');
  });

  test('should be able to calc date_time_end', async () => {
    const time = faker.random.number(120);
    const customer = await seeds.createCustomer();
    const service = await seeds.createService({
      time,
    });
    const data = {
      date_time_start: faker.date.future(),
      customer_id: customer.id,
      service_id: service.id,
      observation: faker.lorem.paragraphs(),
    };
    const response = await request(app)
      .post('/api/schedules')
      .send(data);

    expect(response.status).toBe(200);
    expect(response.body.status).toEqual('scheduled');
    expect(
      isEqual(
        parseISO(response.body.date_time_end),
        addMinutes(toDate(data.date_time_start), time)
      )
    ).toEqual(true);
  });

  test('should be able to list schedules with populate customer', async () => {
    const customer = await seeds.createCustomer();
    const schedule = await seeds.createSchedule({
      customer_id: customer._id,
    });
    const response = await request(app).get(`/api/schedules`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          customer_id: expect.objectContaining({
            _id: String(customer._id),
            name: customer.name,
          }),
        }),
      ])
    );
  });

  test('should be able to list schedules with populate service', async () => {
    const service = await seeds.createService();
    const schedule = await seeds.createSchedule({
      service_id: service._id,
    });
    const response = await request(app).get(`/api/schedules`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          service_id: expect.objectContaining({
            _id: String(service._id),
            name: service.name,
          }),
        }),
      ])
    );
  });
});
