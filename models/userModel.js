import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  isAdmin: { type: Boolean, required: true, default: false }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
