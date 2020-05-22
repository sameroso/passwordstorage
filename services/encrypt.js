module.exports = (password) => {
	const crypto = require('crypto');
	const key = 'gukkduhlajudcddwasfv-=uidwpadjdfsdsdfs';
	const cipher = crypto.createCipher('aes128', key);
	var encrypted = cipher.update(password, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	return encrypted
};
