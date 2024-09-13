import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribed: { type: Boolean, default: true }
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
