import * as fs from 'node:fs/promises';


async function read() {
  try {
    const filePath = new URL('./02-archivo.txt',
      import.meta.url);
    const contentToRead = await fs.readFile(filePath, {
      encoding: 'utf-8'
    });
    console.log(contentToRead);
  } catch (error) {
    console.error(error);
  };
};

read();

// import * as fs from 'node:fs/promises';
// import {
//   fileURLToPath
// } from 'url';
// import {
//   dirname
// } from 'path';

// const __filename = fileURLToPath(
//   import.meta.url);
// const __dirname = dirname(__filename);

// console.log(__filename);
// console.log(__dirname);


// let name = 'README.md';
// let space = '\\';

// const read = async (file) => {
//   try {
//     const data = await fs.readFile(file, 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error(`got an error trying to read the file ${err.message}`);
//   }
// }

// read(__dirname + space + name);