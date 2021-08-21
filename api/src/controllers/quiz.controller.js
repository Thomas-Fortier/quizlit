import Quiz from '../models/Quiz.js';

export default class QuizController {
  static async findByUserId(req, res, next) {
    res.status(200).json(await Quiz.find({ creatorId: req.params.creatorId }));
  }

  static async findByClassId(req, res, next) {
    res.status(200).json(await Quiz.find({ classId: req.params.classId }));
  }

  static async post(req, res, next) {
    let newQuiz = new Quiz(getQuizInfo(req));

    // Post coordinate
    newQuiz.save(error => {
      if (error)
        res.status(400).json({ error, status: 'Not saved' });
    });

    res.status(200).json(newQuiz);
  }

  static async delete(req, res, next) {    
    Quiz.findByIdAndDelete(req.params.id, error => {
      if (error)
        res.status(400).json({ error, status: 'Not deleted' });
    });

    res.status(200).json(req.params.id);
  }
}

function getQuizInfo(req) {
  const title = req.body.title;
  const creatorId = req.body.creatorId;
  const classId = req.body.classId;
  const questions = req.body.questions;

  return {
    title,
    creatorId,
    classId,
    questions
  };
}