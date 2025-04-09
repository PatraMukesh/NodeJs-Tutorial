const fs = require('fs');

// Create File
// fs.writeFileSync('./text.txt', 'Mukesh World');

// Example of Blocking Request
// console.log("1");
// const data = fs.readFileSync('./text.txt', 'utf-8');
// console.log(data);
// console.log("2");

// Result of Blocking Request
// 1
// Mukesh World
// 2

// Example of Non-Blocking Request
// console.log("1");
// fs.readFile('./text.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// });
// console.log("2");

// Result of Non-Blocking Request
// 1
// 2
// Mukesh World


/**
 * 
 * 1. Blocking Request (fs.readFileSync)

    When you use the blocking version of the file read operation fs.readFileSync(), the program will:

    Wait for the file to be completely read before moving on to the next line of code.

    During this process, no other code will run, because it’s synchronous. The execution of the program is "blocked" until the file has been fully read and its content returned.
 * 
 */



/**
 * 
 * 2. Non-Blocking Request (fs.readFile)

    In contrast, when you use the non-blocking version fs.readFile(), 
    the program does not wait for the file to be fully read before moving on. 
    Instead, it registers a callback function that will be executed later when the file reading is complete. While the file is being read, other code continues to execute.
 * 
 */

// By Default We have 4 Threads and we can increase it by adding threads to the CPU

// We can increse the number of threads by adding threads to the CPU Core

const os = require('os');
console.log(os.cpus().length);