import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  cpf: {
    type: String,
    minlength: 11,
    maxlength: 11,
    index: {
      unique: true,
      partialFilterExpression: { cpf: { $type: 'string' } },
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 11,
    unique: true,
    sparse: true,
    index: {
      unique: true,
      partialFilterExpression: { phone: { $type: 'string' } },
    },
  },
});

export default mongoose.model('Customer', CustomerSchema);
