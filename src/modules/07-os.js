const os = require('node:os');

console.log(os.arch());
console.log(os.platform());
console.log(`This is a operative system ${os.platform()} of ${os.arch()}bits`);

// console.log(os.cpus());

// console.log(os.constants);

console.log(os.freemem()); // free total memory

function convertToGB(bytes) {
  const SIZE = 1024;
  const kiloBytes = (bytes / SIZE);
  const megaBytes = (kiloBytes / SIZE);
  const gigaBytes = (megaBytes / SIZE);
  return gigaBytes;
};

console.log(convertToGB(os.freemem()));

console.log(os.totalmem()); // total memory

console.log(os.hostname()); // Host name

console.log(os.machine());

console.log(os.homedir());

console.log(os.tmpdir());