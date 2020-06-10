import * as Yup from 'yup';
import Service from '~/app/models/Service';

class ServiceController {
  async index(req, res) {
    const services = await Service.find();

    return res.status(200).json(services);
  }

  async post(req, res) {
    const { name, time } = req.body;
    if (time && (time <= 0 || time > 120)) {
      return res.status(500).json({ error: 'invalid time' });
    }

    const service = await Service.create(req.body);

    return res.status(200).json(service);
  }

  async put(req, res) {
    const service = await Service.findOne({ _id: req.params.id });

    if (!service) {
      return res.status(401).json({ error: 'service not found' });
    }

    await service.update(req.body);

    return res.status(200).json(service);
  }

  async destroy(req, res) {
    await Service.findOneAndDelete({ _id: req.params.id });

    return res.status(200).json({ deleted: true });
  }
}

export default new ServiceController();
