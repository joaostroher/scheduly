import mongoose, { Schema } from 'mongoose';

const ScheduleSchema = new Schema({
  date_time: {
    type: Date,
    required: true,
  },
  customer_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Customer',
  },
  service_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Service',
  },
  status: {
    type: String,
    enum: ['scheduled', 'canceled'],
    required: true,
    default: 'scheduled',
  },
  observation: {
    type: String,
    required: false,
  },
});

export default mongoose.model('Schedule', ScheduleSchema);
