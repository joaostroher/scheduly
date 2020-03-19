import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Customer', CustomerSchema);
