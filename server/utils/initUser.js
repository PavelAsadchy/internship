const bcrypt = require('bcryptjs');

const db = require('../models');
const Role = db.role;
const User = db.user;

module.exports = function () {
  const hashedPassword = bcrypt.hashSync('123456', 12);
  const user = new User({
    username: 'admin',
    email: 'admin@admin.com',
    password: hashedPassword
  });

  user.save((err, user) => {
    Role.findOne({ name: 'admin' }, (err, role) => {
      user.roles = [role._id];
      user.save();
    })
  });
}