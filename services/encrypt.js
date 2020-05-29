const keys = require('../config/keys');
const crypto = require('crypto');
module.exports = (password) => {
	const key = keys.cryptographyKey;
	const cipher = crypto.createCipher('aes128', key);
	var encrypted = cipher.update(password, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	return encrypted
};
