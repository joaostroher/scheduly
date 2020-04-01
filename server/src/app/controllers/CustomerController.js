import * as Yup from 'yup';
import Customer from '~/app/models/Customer';

class CustomerController {
  async index(req, res) {
    const customers = await Customer.find();
    return res.status(200).json(customers);
  }

  async post(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required('name uninformed'),
      cpf: Yup.string()
        .notRequired()
        .min(11)
        .max(14),
      email: Yup.string()
        .notRequired()
        .email('email invalid'),
      phone: Yup.string().notRequired(),
    });

    await schema.validate(req.body);

    let { name, cpf, email, phone } = req.body;

    if (cpf) cpf = cpf.replace(/\D/g, ''); // somente numeros
    if (phone) phone = phone.replace(/\D/g, ''); // somente numeros

    await Customer.create({
      name,
      cpf,
      email,
      phone,
    })
      .then(customer => {
        return res.status(200).json(customer);
      })
      .catch(error => {
        return res.status(401).json({ error: error.message });
      });
  }

  async put(req, res) {
    const { name, cpf, email, phone } = req.body;

    const customer = await Customer.findById(req.personId);
    if (!customer) {
      return res.status(401).json({ error: 'customer not found' });
    }

    if (name) customer.name = name;
    if (cpf) customer.cpf = cpf.replace(/\D/g, ''); // somente numeros;
    if (email) customer.email = email;
    if (phone) customer.phone = phone.replace(/\D/g, ''); // somente numeros

    await customer
      .save()
      .then(() => {
        return res.status(200).json(customer);
      })
      .catch(error => {
        return res.status(401).json({ error: error.message });
      });
  }
}

export default new CustomerController();
