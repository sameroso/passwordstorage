const crypto = require('crypto');
const keys = require('../config/keys');
module.exports = (password) => {
	const key = keys.cryptographyKey;
	const decipher = crypto.createDecipher('aes128', key);
	var decrypted = decipher.update(password, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	return decrypted;
};
