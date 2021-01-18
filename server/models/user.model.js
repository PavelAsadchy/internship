const { Schema, model } = require('mongoose');

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Role'
    }
  ],
  photoUrl: String
});

const User = model('User', schema);
module.exports = User;