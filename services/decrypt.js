const crypto = require('crypto');
module.exports = (password) => {
	const key = 'gukkduhlajudcddwasfv-=uidwpadjdfsdsdfs';
	const decipher = crypto.createDecipher('aes128', key);
	var decrypted = decipher.update(password, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	return decrypted
};
