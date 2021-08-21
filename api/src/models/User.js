import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  imageUrl: String,
  quizzes: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);