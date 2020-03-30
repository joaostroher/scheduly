import Customer from '~/app/models/Customer';

class CustomerController {
  async index(req, res) {
    const customers = await Customer.find();
    return res.status(200).json(customers);
  }

  async post(req, res) {
    const { name, password, cpf, email, phone } = req.body;

    await Customer.create({
      name,
      password,
      cpf,
      email,
      phone,
    })
      .then(customer => {
        customer.password = undefined;
        return res.json(customer);
      })
      .catch(error => {
        return res.status(401).json({ error: error.message });
      });
  }

  async put(req, res) {
    const { name, password, cpf, email, phone } = req.body;

    const customer = await Customer.findById(req.personId);
    if (!customer) {
      return res.status(401).json({ error: 'Registro não encontrado' });
    }

    if (name) customer.name = name;
    if (password) customer.password = password;
    if (cpf) customer.cpf = cpf;
    if (email) customer.email = email;
    if (phone) customer.phone = phone;

    await customer
      .save()
      .then(() => {
        customer.password = undefined;
        return res.json(customer);
      })
      .catch(error => {
        return res.status(401).json({ error: error.message });
      });
  }
}

export default new CustomerController();
