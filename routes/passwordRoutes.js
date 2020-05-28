const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const encrypt = require('../services/encrypt');
const decrypt = require('../services/decrypt');

const app = (app) => {
	app.post('/api/savepassword', requireLogin, async (req, res) => {
		const User = mongoose.model('users');
		const formList = {
			domain: req.body.domain,
			userName: req.body.userName,
			password: encrypt(req.body.password),
		};
		const userUpdate = await User.findByIdAndUpdate(req.user._id, {
			$push: { passwordList: formList },
		});
		const user = await User.findById(req.user._id);
		const decrypting = user.passwordList.map((data) => {
			data.password = decrypt(data.password);
		});

		res.send(user);
	});
	app.post('/api/deletepassword', async (req, res) => {
		console.log(req.body);
		const User = mongoose.model('users');
		var id = mongoose.Types.ObjectId(req.body._id);
		const userUpdate = await User.findByIdAndUpdate(req.user._id, {
			$pull: { passwordList: { _id: id } },
		});

		const user = await User.findById(req.user._id);
		const decrypting = user.passwordList.map((data) => {
			data.password = decrypt(data.password);
		});

		res.send(user);
	});
	app.patch('/api/updatepassword', async (req, res) => {
		const formList = {
			domain: req.body.domain,
			userName: req.body.userName,
			password: encrypt(req.body.password),
		};
		const User = mongoose.model('users');
		var id = mongoose.Types.ObjectId(req.body._id);
		const userUpdate = await User.findById(req.user._id);

		const index = userUpdate.passwordList.findIndex((el) => {
			return el._id.toString() === req.body._id;
		});

		userUpdate.passwordList[index].domain = formList.domain;
		userUpdate.passwordList[index].userName = formList.userName;
		userUpdate.passwordList[index].password = formList.password;

		const updated = await userUpdate.save();

		const user = await User.findById(req.user._id);
		const decrypting = user.passwordList.map((data) => {
			data.password = decrypt(data.password);
		});

		res.send(user);
	});
	app.post('/api/deleteaccount', async (req, res) => {
		const User = mongoose.model('users');
		const user = await User.findByIdAndDelete(req.user._id);
		res.send(false)
	});
};

module.exports = app;
