import { addMinutes, parseISO, isAfter } from 'date-fns';
import * as Yup from 'yup';
import Schedule from '~/app/models/Schedule';
import Customer from '~/app/models/Customer';
import Service from '~/app/models/Service';

class ScheduleController {
  async index(req, res) {
    const schedules = await Schedule.find().sort({ date_time_start: 1 });
    return res.status(200).json(schedules);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      date_time_start: Yup.date().required(),
      customer_id: Yup.string().required(),
      service_id: Yup.string().required(),
      observation: Yup.string().notRequired(),
    });

    await schema.validate(req.body);

    const { date_time_start, customer_id, service_id, observation } = req.body;

    if (!isAfter(parseISO(date_time_start), new Date()))
      return res
        .status(400)
        .json({ message: 'cant schedule with past date_time_start' });

    const customerExists = await Customer.exists({ _id: customer_id });
    if (!customerExists)
      return res.status(400).json({ message: 'customer not found' });

    const service = await Service.findById(service_id);
    if (!service) return res.status(400).json({ message: 'service not found' });

    const date_time_end = addMinutes(parseISO(date_time_start), service.time);

    const scheduleConflicted = await Schedule.findOne({
      date_time_end: { $gte: date_time_start },
      date_time_start: { $lte: date_time_end },
      status: { $ne: 'canceled' },
    });
    if (scheduleConflicted)
      return res
        .status(400)
        .json({ message: "date_time don't found available" });

    const schedule = await Schedule.create({
      date_time_start,
      date_time_end,
      customer_id,
      service_id,
      observation,
    });

    await schedule
      .populate('customer_id')
      .populate('service_id')
      .execPopulate();
    return res.status(200).json(schedule);
  }

  async destroy(req, res) {
    const id = req.params.scheduleId;
    const schedule = await Schedule.findByIdAndUpdate(
      id,
      { status: 'canceled' },
      { new: true }
    );
    return res.status(200).json(schedule);
  }
}

export default new ScheduleController();
