import crypto from 'crypto';

//createHash() method is used to create Hash object
const hash = crypto.createHash('sha256');
hash.update('password1234');
console.log(hash.digest('hex'));

// example: create userId using randomBytes()
crypto.randomBytes(8, (err, buf) => {
    if (err) throw err;
    console.log(buf.toString('hex'));
});

// createCipheriv() & createDecipheriv()
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// encrtpting & decrypting a message
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted, 'encrypted');

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);