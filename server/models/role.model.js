const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

const Role = model('Role', schema);
module.exports = Role;