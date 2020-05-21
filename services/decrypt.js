module.exports = (password) => {
	const crypto = require('crypto');

	let iv = crypto.randomBytes(16);


	let key = 'jd85ndf3875jf0495k85jf94jr9jf9=m';


	let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
	let decrypted = decipher.update(password, 'hex', 'utf-8');
	decrypted += decipher.final('utf-8');

	return decrypted
};
