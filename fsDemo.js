//import fs from 'fs';
import fs from 'fs/promises';

// readFile async
/*
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
*/

// readFile sync
/*
const data = fs.readFileSync('./test.txt', 'utf8');
console.log(data);
 */

// readFile - promise .then 
/*
fs.readFile('./test.txt', 'utf8')
    .then(data => { console.log(data) })
    .catch(err => { console.error(err) });
*/

// readFile - promise async/await Best option for reading file
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

// writeFile - promise async/await Best option for writing file
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello World!');
        console.log('File written successfully');
    } catch (err) {
        console.error(err);
    }
}

// appendFile - promise async/await Best option for appending file
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nHello World Again!');
        console.log('File appended successfully');
    } catch (err) {
        console.error(err);
    }
}


appendFile();
readFile();

