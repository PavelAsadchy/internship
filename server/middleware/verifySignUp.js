const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateEmail = (req, res, next) => {
  const { email } = req.body;

  User
    .findOne({ email })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: 'Unexpected error:', err });
        return;
      }
      
      if (user) {
        res.status(400).send({ message: 'Email already exists!' });
        return;
      }

      next();
    });
}

const checkRolesExisting = (req, res, next) => {
  const { roles } = req.body.roles;

  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (ROLES.includes(roles[i])) {
        res.status(400).send({ message: `Role ${roles[i]} doesn't exist!` });
        return;
      }
    }
  }

  next();
}

const verifySignUp = {
  checkDuplicateEmail,
  checkRolesExisting
};

module.exports = verifySignUp;