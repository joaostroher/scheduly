import Customer from '~/app/models/Customer';

class CustomerController {
  async index(req, res) {
    const customers = await Customer.find();
    return res.status(200).json(customers);
  }

  async post(req, res) {
    const customer = await Customer.create(customer);
    return customer;
  }
}

export default new CustomerController();
