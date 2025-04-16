const express = require("express");
const port = 8001;
const app = express();

app.get("/", (req, res)=>{
    return res.send("Express Home Page");
});

app.get("/about", (req, res)=>{
    return res.send(`Express About Page Ok \nI am ${req.query.myname}\nMy Role is ${req.query.role}`);
});

app.listen(port, ()=> console.log("Server Started"));

// Versioning Package.json Documentation
// https://docs.npmjs.com/cli/v10/configuring-npm/package-json