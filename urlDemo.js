import url from 'url';

const urlString = 'https://www.google.com/search?q=node.js';

// URL object
const urlObject = new URL(urlString);
console.log(urlObject);

// format 
console.log(url.format(urlObject));

// import.meta.url
console.log(import.meta.url);

// fileURLToPath
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObject.search);
console.log(params);
console.log(params.get('q'));
console.log(params);
params.delete('q');
console.log(params);
