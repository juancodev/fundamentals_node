//update
async function greeting(name) {
  console.log('initial process!');

  setTimeout(() => {
    let lastName = 'montilla'
  }, 2000);
  await greeting(name, lastName)


};

function goodbye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bye,' + name);
      resolve(name);
    }, 3000);
  });
};