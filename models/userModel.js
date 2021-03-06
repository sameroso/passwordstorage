const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  googleId: String,
  facebookId: String,
  profilePic: String,
  profileName: String,
  passwordList: [
    { title: String, domain: String, userName: String, password: String },
  ],
});

mongoose.model('users', UsersSchema);
