import mongoose, { Schema } from 'mongoose';
import './Service';

const ScheduleSchema = new Schema({
  date_time_start: {
    type: Date,
    required: true,
  },
  date_time_end: {
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
    default: '',
  },
});

export default mongoose.model('Schedule', ScheduleSchema);
