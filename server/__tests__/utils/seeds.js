import faker from 'faker';
import { addMinutes } from 'date-fns';

import Service from '~/app/models/Service';
import Customer from '~/app/models/Customer';
import Schedule from '~/app/models/Schedule';

export default {
  async createService() {
    return Service.create({
      name: faker.lorem.sentence(),
      time: faker.random.number(120),
    });
  },
  async createCustomer() {
    return Customer.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
  },
  async createSchedule() {
    const date = faker.date.future();
    const customer = await this.createCustomer();
    const service = await this.createService();

    return Schedule.create({
      date_time_start: date,
      date_time_end: addMinutes(date, faker.random.number(120)),
      customer_id: customer.id,
      service_id: service.id,
      observation: faker.lorem.paragraph(),
    });
  },
};
