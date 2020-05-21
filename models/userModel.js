const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({
	googleId: String,
	facebookId: String,
	passwordList: [{ domain: String, userName: String, password: String }],
});

mongoose.model('users', UsersSchema);
