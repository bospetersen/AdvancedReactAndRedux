const User = require('../models/user.models')
const jwt = require('jwt-simple');
const config = require('../config')


const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = (req, res, next) => {
  // res.send({ success: 'true' });

  const email = req.body.email;
  const password = req.body.password

  if (!email || !password) {
    return res.status(422).send({ message: "You must provide both email and password!" });
  }

  //Test to see if email has been used

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) { return next(err) }

    if (existingUser) {
      return res.status(422).send({ message: "Email already exists!" });
    }

    const user = new User({
      email: email,
      password: password
    });

    user.save((err) => {
      if (err) { return next(err) }

      res.json({ token: tokenForUser(user) });
    });
  });


}