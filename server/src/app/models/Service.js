import mongoose, { Schema } from 'mongoose';

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Service', ServiceSchema);
