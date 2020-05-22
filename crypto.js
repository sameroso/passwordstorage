/* const crypto = require('crypto');

let secretMessage = 'coe barbudo';

let key = 'jd85ndf3875jf0495k85jf94jr9jf9=m';

let cipher = crypto.createCipher('aes-256-cbc', key);
let encrypted = cipher.update(secretMessage,'utf-8','hex');
encrypted += cipher.final('hex');

console.log(encrypted)

const encrypt_password = 'e08dcbb8162c2ecb42087385ffffe6d0e';

let decipher = crypto.createDecipher('aes-256-cbc', key);
let decrypted = decipher.update(encrypt_password, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');

console.log(decrypted); */

/* 'a password' */

const crypto = require('crypto');
const key = 'gukkduhlajudcddwasfv-=uidwpadjdfsdsdfs';
const password = 'falazezebomdiacara';
const cipher = crypto.createCipher('aes128', key);
var encrypted = cipher.update(password, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const encrypt_password =
	'd1121db3dbec7610165f95f75ccfcfaee4604cc0733dd43f0619006c91df0223';
const decipher = crypto.createDecipher('aes128', key);
var decrypted = decipher.update(encrypt_password, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
