console.log('Principal loop...');

function wrongFunction() {
  anOtherWrongFunction();
};

// stop thread principal
// wrongFunction();

function anOtherWrongFunction() {
  return 3 + z;
}

try {
  wrongFunction();
} catch (error) {
  // error = Reference error: message
  console.error('this is the error: ' + error.message);
}

// Async error

function asyncWrongFunction() {
  setTimeout(async () => {
    try {
      const wrong = await 3 + z;
      return wrong;
    } catch (error) {
      console.error('this is the error at the async function: ' + error.message);
      console.log('Loop continue...');
    }
  }, 2000);
}

asyncWrongFunction();

console.log('Principal loop...');