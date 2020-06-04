import * as Yup from 'yup';
import Customer from '~/app/models/Customer';

class CustomerController {
  async index(req, res) {
    const customers = await Customer.find();

    return res.status(200).json(customers);
  }

  async post(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string()
        .notRequired()
        .test('cpf', 'invalid cpf', value => {
          if (!value) return true;
          return value.length === 11;
        })
        .max(11),
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.string()
        .notRequired()
        .test('phone', 'invalid phone', value => {
          if (!value) return true;
          return value.length >= 11;
        }),
    });

    await schema.validate(req.body, { abortEarly: false });

    const customer = await Customer.create(req.body);

    return res.status(200).json(customer);
  }

  async put(req, res) {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ error: 'customer not found' });
    }

    await customer.update(req.body);

    return res.status(200).json(customer);
  }

  async destroy(req, res) {
    await Customer.findOneAndDelete({ _id: req.params.id });

    return res.status(200).json({ deleted: true });
  }
}

export default new CustomerController();
