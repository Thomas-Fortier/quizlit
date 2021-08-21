import express from 'express';
import UserController from '../controllers/user.controller.js';

const router = express.Router();

// GET
router.route('/:id').get(UserController.findById);
router.route('/google/:googleId').get(UserController.findByGoogleId);
// POST
router.route('/').post(UserController.post);

export default router;