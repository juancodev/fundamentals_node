function greeting(name) {
  console.log('initial process!');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log('Hello ' + name);
        resolve(name);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  })


};

function goodbye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bye,' + name);
      resolve(name);
    }, 3000);
  });
};

// result
greeting('juan')
  .then(goodbye)
  .then((success) => {
    setTimeout(() => {
      console.log('success ' + success)
    }, 2500);
  })
  .catch((error) => console.error(error));

// greeting('Juan', (name) => {
//   goodbye(name, () => {
//     setTimeout(() => {
//       console.log('finally async');
//     }, 3000);
//   });
// });