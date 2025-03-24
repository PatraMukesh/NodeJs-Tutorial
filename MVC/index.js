const http = require("http");

const myServer = http.createServer((req, res)=>{
    console.log("New Req Rec.");
    res.end("Hello From Server");
});

myServer.listen(8001, ()=> console.log("Server Started"));

