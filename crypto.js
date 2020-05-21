const crypto = require('crypto');

let iv = crypto.randomBytes(16);

let secretMessage = 'coe barbudo';

let key = 'jd85ndf3875jf0495k85jf94jr9jf9=m';

let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encrypted = cipher.update(secretMessage,'utf-8','hex');
encrypted += cipher.final('hex');

console.log(encrypted)

let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');

console.log(decrypted);