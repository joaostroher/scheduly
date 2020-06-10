import * as Yup from 'yup';
import Customer from '~/app/models/Customer';

const schema = Yup.object().shape({
  name: Yup.string()
    .label('Nome')
    .required(),
  cpf: Yup.string().test('cpf', 'CPF inválido!', value => {
    if (!value) return true;
    return /\d{3}.\d{3}.\d{3}-\d{2}/.test(value);
  }),
  email: Yup.string()
    .label('Email')
    .required()
    .email(),
  phone: Yup.string().test('phone', 'Telefone inválido!', value => {
    if (!value) return true;
    return /\(\d{2}\) \d{5}-\d{3,4}/.test(value);
  }),
});

class CustomerController {
  async index(req, res) {
    const customers = await Customer.find();

    return res.status(200).json(customers);
  }

  async post(req, res) {
    await schema.validate(req.body, { abortEarly: false });

    const customer = await Customer.create(req.body);

    return res.status(200).json(customer);
  }

  async put(req, res) {
    const customer = await Customer.findOne({ _id: req.params.id });

    if (!customer) {
      return res.status(404).json({ error: 'customer not found' });
    }

    await schema.validate(req.body, { abortEarly: false });

    await customer.update(req.body);

    return res.status(200).json(customer);
  }

  async destroy(req, res) {
    await Customer.findOneAndDelete({ _id: req.params.id });

    return res.status(200).json({ deleted: true });
  }
}

export default new CustomerController();
