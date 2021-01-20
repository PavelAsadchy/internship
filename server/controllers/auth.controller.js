const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const randtoken = require('rand-token');

const authConfig = require('../config/auth.config');
const db = require('../models');
const { user } = require('../models');
const User = db.user;
const Role = db.role;

const refreshTokens = {};

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

          res.status(201).json({ message: 'User created' });
        });
      })
    } else {
      Role.findOne({ name: 'user' }, (err, role) => {
        if (err) return handleError(err);

        user.roles = [role._id];
        user.save(err => {
          if (err) return handleError(err);

          res.status(201).json({ message: 'User created' });
        });
      })
    }
  })
}

const login = (req, res) => {
  const { username, password, roles } = req.body;

  User
    .findOne({ username })
    .populate('roles', '-__v')
    .exec((err, user) => {
      if (err) return handleError(err);
      if (!user) return res.status(404).json({ message: 'User not found' });

      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) return res.status(401).json({
        accessToken: null,
        message: 'Invalid password'
      });

      const token = jwt.sign({ id: user.id }, authConfig.jwtSecret, { expiresIn: '1h' });
      const refreshToken = randtoken.uid(256);
      refreshTokens[refreshToken] = user.id;
      const authorities = [];
      for (let i = 0; i < roles.length; i++) {
        authorities.push('ROLE_' + user.roles[i].name.toUpperCase());
      }

      res.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        photoUrl: user.photoUrl,
        jwt: token,
        refreshToken
      });
    });
}

const logout = (req, res) => {
  const { refreshToken } = req.body;
  if (refreshToken in refreshTokens) delete refreshTokens[refreshToken];
  res.sendStatus(204);
}

const refresh = (req, res) => {
  const { refreshToken } = req.body;
  if (refreshToken in refreshTokens) {
    const token = jwt.sign({ id: user.id }, authConfig.jwtSecret, { expiresIn: '1h' });
    res.json({ jwt: token });
  } else res.sendStatus(401);
}

module.exports = {
  signup,
  login,
  logout,
  refresh
}

function handleError(err) {
  res.status(500).json({ message: 'Error occured', err });
}
