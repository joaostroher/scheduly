import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    minlength: 11,
    maxlength: 11,
    unique: true,
    sparse: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 11,
    unique: true,
    sparse: true,
  },
});

export default mongoose.model('Customer', CustomerSchema);
