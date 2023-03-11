const asyncFunction = (callback) => {
  try {
    let a = 3 + z;
    callback(null, a)
  } catch (error) {
    callback(error)
  };
};

asyncFunction((error, data) => {
  if (error) {
    console.error('You have an error: ' + error.message);
    console.error(error);
    return false;
    //throw error; doesn't work on asynchronous functions
  }

  console.log('It is working!! ' + data);
})