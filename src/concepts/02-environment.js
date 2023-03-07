const name = process.env.NAME || 'unknown';
const web = process.env.WEB || 'empty';

console.log('My name is: ' + name);
console.log('My website is: ' + web);

// NAME=value WEB=value.com node src/concepts/02-environment.js