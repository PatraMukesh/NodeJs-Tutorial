// const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");
const port = 8001;
// this app basically a handler function like myHandler()
const app = express();

app.get("/", (req, res)=>{
    return res.send("Express Home Page");
});

app.get("/about", (req, res)=>{
    // In Express We Don't Need To Parse URL Like MyHandler
    // const parsedUrl = url.parse(req.url, true);
    // console.log(parsedUrl);
    return res.send(`Express About Page Ok \nI am ${req.query.myname}\nMy Role is ${req.query.role}`);
});

// const myServer = http.createServer(app);
// myServer.listen(8001, ()=> console.log("Server Started"));

app.listen(port, ()=> console.log("Server Started"));

// function myHandler(req, res){
//     const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
//     // browser call this log two times because of fab icon
//     if(req.url === '/favicon.ico') return res.end();
//     // http://127.0.0.1:8001/about?myname=mukesh&role=developer
//     const parsedUrl = url.parse(req.url, true);
//     console.log(parsedUrl);
//     fs.appendFile('log.txt',log,(err, data) => {
//         // console.log(req.headers);
//         // res.end("Hello From Server");
//         // re.end can call one time
//         switch (parsedUrl.pathname) {
//             case '/':
//                 if(req.method === 'GET'){
//                     res.end("My Handler Home Page");
//                 }
//                 break;
//             case '/about':
//                 const username = parsedUrl.query.myname;
//                 const role = parsedUrl.query.role;
//                 if(req.method === 'GET'){
//                     res.end(`About Page Ok \nI am ${username}\nMy Role is ${role}`);
//                 }
//                 break;
//             case '/signup':
//                 if(req.method === 'GET'){
//                     res.end(`Signup Form`);
//                 }else if(req.method === 'POST'){
//                     //  DB Operation
//                     res.end(`Signup Successfull`);
//                 }
//                 break;
//             default:
//                 res.end("404 Not Found");
//                 break;
//         } 
//     });
// }

// const myServer = http.createServer(myHandler);

// myServer.listen(8001, ()=> console.log("Server Started"));