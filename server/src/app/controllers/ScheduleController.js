import Schedule from '~/app/models/Schedule';

class ScheduleController {
  async index(req, res) {
    const schedules = await Schedule.find();
    return res.status(200).json(schedules);
  }

  async store(req, res) {
    const { date_time, customer_id, service_id, observation } = req.body;
    const schedule = await Schedule.create({
      date_time,
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
