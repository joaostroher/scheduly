import Customers from '~/app/models/Customers';

class CustomerController {
  async index(req, res) {
    const customers = await Customers.find();
    return res.status(200).json(customers);
  }
}

export default new CustomerController();
