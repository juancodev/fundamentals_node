const bcrypt = require('bcrypt');

const password = 'Password2023.+*';
const saltRound = 10;

// bcrypt.hash(password, 5, (error, hash) => {
//   console.log(hash);
// });

bcrypt.genSalt(saltRound, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    bcrypt.compare(password, hash, (err, result) => {
      if (result) {
        console.log(result);
      } else {
        console.error(err);
      }
    });
  });
});


// bcrypt.genSalt(saltRound)
//   .then((error, salt) => {
//     bcrypt.hash(password, salt)
//       .then((error, hash) => {
//         console.log(hash);
//       })
//   });