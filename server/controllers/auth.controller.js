const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authConfig = require('../config/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;

const signup = (req, res) => {
  const { username, email, password, roles, photoUrl } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 12);

  const user = new User({ username, email, password: hashedPassword, photoUrl });

  user.save((err, user) => {
    if (err) return handleError(err);

    if (roles) {
      Role.find({ name: { $in: roles } }, (err, roles) => {
        if (err) return handleError(err);

        user.roles = roles.map(role => role._id);
        user.save(err => {
          if (err) return handleError(err);

          res.status(201).send({ message: 'User created' });
        });
      })
    } else {
      Role.findOne({ name: 'user' }, (err, role) => {
        if (err) return handleError(err);

        user.roles = [role._id];
        user.save(err => {
          if (err) return handleError(err);

          res.status(201).send({ message: 'User created' });
        });
      })
    }
  })
}

const signin = (req, res) => {
  const { username, password, roles } = req.body;

  User
    .findOne({ username })
    .populate('roles', '-__v')
    .exec((err, user) => {
      if (err) return handleError(err);
      if (!user) return res.status(404).send({ message: 'User not found' });

      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) return res.status(401).send({
        accessToken: null,
        message: 'Invalid password'
      });

      const token = jwt.sign({ id: user.id }, authConfig.jwtSecret, { expiresIn: '1h' });
      const authorities = [];
      for (let i = 0; i < roles.length; i++) {
        authorities.push('ROLE_' + user.roles[i].name.toUpperCase());
      }

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        photoUrl: user.photoUrl,
        accessToken: token
      });
    });
}

module.exports = {
  signin,
  signup
}

function handleError(err) {
  res.status(500).send({ message: 'Error occured', err });
}
