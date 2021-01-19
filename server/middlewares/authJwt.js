const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) return res.status(403).send({ message: 'No token provided' });

  jwt.verify(token, authConfig.jwtSecret, (err, decoded) => {
    if (err) return res.status(401).send({ message: 'Unauthorized!' });

    req.userId = decoded.id;
    next();
  });
};

const isAdmin = isRoleActive(req, res, next, 'admin');
const isManager = isRoleActive(req, res, next, 'manager');

const authJwt = {
  verifyToken,
  isAdmin,
  isManager
};

module.exports = authJwt;

function isRoleActive(req, res, next, roleToCheck) {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: 'Unexpected error:', err });
      return;
    }

    Role.find({ _id: { $in: user.roles } }, (err, roles) => {
      if (err) {
        res.status(500).send({ message: 'Unexpected error:', err });
        return;
      }

      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === roleToCheck) {
          next();
          return;
        }
      }

      res.status(403).send({ message: 'Another access role required' });
      return;
    })
  })
}