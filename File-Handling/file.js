const fs = require('fs');

// Write file or Create File

// Synchronous call or Blocking Request
// fs.writeFileSync('./text.txt', 'Mukesh World');

// Asynchronous call or Non-Blocking Request
// fs.writeFile('./text.txt', 'Mukesh World Async', (err)=>{
//     if(err){
//         console.log(err);
//     }
// });

// Read file

// Synchronous call
// const data = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(data);

// Asynchronous call
// fs.readFile('./contact.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// });



// Append file

// Synchronous call
// fs.appendFileSync('./text.txt', new Date().getDate().toLocaleString());
// fs.appendFileSync('./text.txt', `${Date.now()} Hey There! I am a Mukesh Patra\n`);

// Copy file

// Synchronous call
// fs.copyFileSync('./text.txt', './textCopy.txt');

// Asynchronous call
// fs.copyFile('./text.txt', './textCopy.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
// });

// Stats File

// Synchronous call
// const stats = fs.statSync('./text.txt');
// console.log(stats);

// Asynchronous call
// fs.stat('./text.txt', (err, stats)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(stats);
// });

// Delete file

// Synchronous call
// fs.unlinkSync('./textCopy.txt');

// Asynchronous call
// fs.unlink('./textCopy.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
// });

// Rename file

// Synchronous call
// fs.renameSync('./textCopy.txt', './textCopyRename.txt');

// Asynchronous call
// fs.rename('./text.txt', './textCopy.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
// });

// Create Directory

// Synchronous call
// fs.mkdirSync('./test');
// fs.mkdirSync('./test/test2', {recursive: true});

// Asynchronous call
// fs.mkdir('./test', (err)=>{
//     if(err){
//         console.log(err);
//     }
// });

// Read Directory

// Synchronous call or Blocking Request
// const files = fs.readdirSync('./');
// console.log(files);

// Asynchronous call or Non-Blocking Request
// fs.readdir('./', (err, files)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(files);
// });

// Delete Directory

// Synchronous call or Blocking Request
// fs.rmdirSync('./test');

// Asynchronous call or Non-Blocking Request
// fs.rmdir('./test', (err)=>{
//     if(err){
//         console.log(err);
//     }
// });

// Write Stream
// Defination: In Node.js, a stream is an abstraction for working with data that is read or written in chunks, rather than all at once. Streams are useful when dealing with large amounts of data, as they allow you to process data piece by piece instead of loading everything into memory at once.

// const ws = fs.createWriteStream('./text.txt');
// ws.write('Mukesh Patra\n');
// ws.write('Rajesh Patra\n');
// ws.close();

// Read Stream
// const rs = fs.createReadStream('./text.txt');
// rs.on('data', (chunk)=>{
//     console.log(chunk);
//     console.log(chunk.toString());
// });
