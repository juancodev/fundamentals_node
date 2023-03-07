function greeting(name, callback) {
  console.log('initial process!');

  setTimeout(() => {
    console.log('Hello ' + name);
    callback(name);
  }, 2000);
};

const speak = (callbackSpeak) => {
  setTimeout(() => {
    console.log('Bla, bla, bla, bla...');
    callbackSpeak();
  }, 1500);
};

function conversation(name, times, callback) {
  if (times > 0) {
    speak(() => {
      conversation(name, --times, callback)
    });
  } else {
    goodbye(name, callback);
  }

};

function goodbye(name, callback) {
  setTimeout(() => {
    console.log('Bye,' + name);
    callback();
  }, 2500);
};

// recursion: solution to the callback hell
greeting('Juan', (name) => {
  conversation(name, 5, () => {
    setTimeout(() => {
      console.log('finally async');
    }, 3000);
  });
});


//! callback hell
/* console.log('starting process')
hello('Miguel', (name) => {
  speak(() => {
    speak(() => {
      speak(() => {
        goodbye(name, () => {
          console.log('finishing process')
        })
      })
    })
  })
})
 */