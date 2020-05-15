const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({ googleId: String, facebookId: String });

mongoose.model('users', UsersSchema);
