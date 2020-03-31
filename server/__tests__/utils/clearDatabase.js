import Schedule from '~/app/models/Schedule';
import Service from '~/app/models/Service';
import Customer from '~/app/models/Customer';

export default async () => {
  await Schedule.deleteMany();
  await Service.deleteMany();
  await Customer.deleteMany();
};
