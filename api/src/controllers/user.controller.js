import User from '../models/User.js';

export default class UserController {
  static async findById(req, res, next) {
    res.status(200).json(await User.find({ _id: req.params.id }));
  }

  static async findByGoogleId(req, res, next) {
    res.status(200).json(await User.find({ googleId: req.params.googleId }));
  }

  static async post(req, res, next) {
    let newUser = new User(getUserInfo(req));

    // Post coordinate
    newUser.save(error => {
      if (error)
        res.status(400).json({ error, status: 'Not saved' });
    });

    res.status(200).json(newUser);
  }
}

function getUserInfo(req) {
  const firstName = req.body.givenName;
  const lastName = req.body.familyName;
  const googleId = req.body.googleId;
  const imageUrl = req.body.imageUrl;
  const email = req.body.email;

  return {
    firstName,
    lastName,
    googleId,
    imageUrl,
    email
  };
}