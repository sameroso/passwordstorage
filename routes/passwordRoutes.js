const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const encrypt = require('../services/encrypt')

const app = (app) => {
	app.post('/api/savepassword', requireLogin, async (req, res) => {
		const User = mongoose.model('users');
		const formList = {
			domain: req.body.domain,
			userName: req.body.userName,
			password: encrypt(req.body.password),
		};
		const userUpdate = await User.findByIdAndUpdate(
			 req.user._id  ,
			{ $push: { passwordList: formList } }
        )
        const user = await User.findById(req.user._id)
        
        res.send(user)
        
	});
};

module.exports = app;
