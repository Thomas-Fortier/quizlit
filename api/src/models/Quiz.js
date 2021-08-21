import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  creatorId: String,
  classId: String,
  title: String,
  questions: Array,
  submissions: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Quiz', quizSchema);