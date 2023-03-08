const {
  exec,
  spawn
} = require('node:child_process')

// execute other process

// exec('cd src/ && ls -lth', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }

//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

console.log('--------------------Spawn---------------');

const respawn = spawn('ls', ['-lth']);

respawn.stdout.on('data', (data) => {
  console.log(respawn.killed);
  console.log(data.toString());
})

respawn.on('exit', () => {
  console.log('process finish');
})