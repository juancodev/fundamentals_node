console.log('print message');
console.info('print a informative message');
console.warn('print a warning message');
console.error('print a error message');

const table = [{
    a: 1,
    b: 2,
    c: 5,
    d: true,
    e: undefined,
  },
  {
    monday: false,
    tuesday: true,
    wednesday: undefined,
    thursday: undefined,
    friday: undefined,
  }
];

console.table(table);

console.log('content...');
console.group('initial group');
console.log('intro of group');
console.log('intro of group');
console.log('intro of group');
console.log('intro of group');
console.log('intro of group');
console.log('intro of group');
console.log('intro of group');
console.log('intro of group');
console.log('intro of group');
console.groupEnd('Finally group');
console.log('content...');

console.clear(); // clear the console

//count in console
console.count('count'); // 1
console.count('count'); // 2
console.count('count'); // 3
console.count('count'); // 4
console.countReset('count'); // reset count
console.count('count'); // 1
console.count('count'); // 2
console.count('count'); // 1
console.count('count'); // 2