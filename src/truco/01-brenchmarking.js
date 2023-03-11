let sum = 0;
let numberQuantity = 100000000;

console.time('Loop Time');
console.log('loop start');
for (let i = 0; i < numberQuantity; i++) {
  sum *= 1;
}
console.timeEnd('Loop Time');
console.log('loop end');

function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.time('initial Async');
      console.log('function async ');
      console.timeEnd('initial Async');
    }, 4000)

  })
};


asyncFunction()
  .then(() => {
    console.log('test');
  })