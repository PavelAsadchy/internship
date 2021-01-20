const { check, validationResult } = require('express-validator');
const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

const checkSignupInputs = [
  check('email', 'Incorrect email').isEmail(),
  check('password', 'Minimal length is 6 digits').isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect registration inputs'
      });
      return;
    }

    next();
  }
];

const checkDuplicateEmail = (req, res, next) => {
  const { email } = req.body;

  User
    .findOne({ email })
    .exec((err, user) => {
      if (err) {
        res.status(500).json({ message: 'Unexpected error:', err });
        return;
      }
      
      if (user) {
        res.status(400).json({ message: 'Email already exists!' });
        return;
      }

      next();
    });
}

const checkRolesExisting = (req, res, next) => {
  const { roles } = req.body;

  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (ROLES.includes(roles[i])) {
        res.status(400).json({ message: `Role ${roles[i]} doesn't exist!` });
        return;
      }
    }
  }

  next();
}

const verifySignUp = {
  checkSignupInputs,
  checkDuplicateEmail,
  checkRolesExisting
};

module.exports = verifySignUp;