function greeting(name, callback) {
  console.log('initial process!');

  setTimeout(() => {
    console.log('Hello ' + name);
    callback(name);
  }, 2000);
};

function goodbye(name, callback) {
  setTimeout(() => {
    console.log('Bye,' + name);
    callback();
  }, 2500);
};

// result
greeting('Juan', (name) => {
  goodbye(name, () => {
    setTimeout(() => {
      console.log('finally async');
    }, 3000);
  });
});