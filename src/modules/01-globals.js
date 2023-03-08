console.log(global); // this === global // true;

// It's really use by nodejs for connect to a database!
let i = 0;
const interval = setInterval(() => {
  i++
  console.log('try connect to the database...');
  if (i === 4) {
    clearInterval(interval);
    console.log('connection is not success!!!');
  }
}, 1000);

// we can know the directory or file
console.log(__dirname); // know the directory!
console.log(__filename); // know the file!

//create global variable (not recommend)!

global.myGlobalVariable = 'My global variable!';
console.log(myGlobalVariable);