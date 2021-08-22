import express from 'express';
import QuizController from '../controllers/quiz.controller.js';

const router = express.Router();

// GET
router.route('/creator/:creatorId').get(QuizController.findByUserId);
router.route('/class/:classId').get(QuizController.findByClassId);
router.route('/id/:id').get(QuizController.findById);
// POST
router.route('/').post(QuizController.post);
// DELETE
router.route('/:id').delete(QuizController.delete);

export default router;