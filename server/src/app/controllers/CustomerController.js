import Customers from '~/app/models/Customers';

class CustomerController {
  async index(req, res) {
    const customers = await Customers.find();
    return res.status(200).json(customers);
  },

  async post(req, res) {
    const customer = await Customers.create(customer);
    return customer;
  }
}

export default new CustomerController();
