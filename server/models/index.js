const db = {};

db.mongoose = require('mongoose');
db.user = require('./user.model');
db.role = require('./role.model');
db.ROLES = ['user', 'admin'];

module.exports = db;