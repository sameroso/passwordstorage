module.exports = (password) => {
	const crypto = require('crypto');

	let iv = crypto.randomBytes(16);


	let key = 'jd85ndf3875jf0495k85jf94jr9jf9=m';

	let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(password, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted
};
