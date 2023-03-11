process.on('beforeExit', () => {
  console.log('process before Exit');
});

process.on('exit', () => {
  console.log('process exit of the Event Loop!');
});

// catch error with process

process.on('uncaughtException', (error, origin) => {
  console.error(error);
  console.info(origin);
})