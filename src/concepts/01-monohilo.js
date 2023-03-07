'use strict'
// not block

console.log('hello world');
let i = 0;

setInterval(() => {
  i++;
  console.log(i);
}, 1000);

// Debemos tener cuidado cuando tenemos errores porque al ser un solo monohilo, se tiende a cancelar el proceso.

console.log('Next process');