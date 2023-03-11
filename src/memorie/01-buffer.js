const {
  Buffer
} = require('node:buffer');

console.log(Buffer.alloc(4));

console.log(Buffer.from([1, 2, 3, 9]));

console.log(Buffer.from('hola'));
console.log(Buffer.from('hola').toString());

const abc = Buffer.alloc(26);

for (i = 0; i < abc.length; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString());