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
		const decrypting = user.passwordList.map((data) =>{
			data.password = decrypt(data.password)
		})
		
		res.send(user);
	});
	app.post('/api/deletepassword',async (req,res)=>{
		console.log(req.body)
		const User = mongoose.model('users');
		var id = mongoose.Types.ObjectId(req.body._id);
		const userUpdate = await User.findByIdAndUpdate(req.user._id,{
			 $pull: {passwordList: {_id: id} } 
		})
		
		const user = await User.findById(req.user._id);
		const decrypting = user.passwordList.map((data) =>{
			data.password = decrypt(data.password)
		})
		
		res.send(user);
	})
	
};

module.exports = app;
