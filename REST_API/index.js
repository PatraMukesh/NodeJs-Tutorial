const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 8001;

// Get All Users using HTML
app.get("/users", (req, res)=>{
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html); 
});

// REST API
// Get All Users
app.get("/api/users", (req, res)=>{
    return res.json(users);
});

// Get Single User (:id - dynamic path parameter)
app.get("/api/users/:userid",(req, res)=>{
    const userid = Number(req.params.userid);
    const user = users.find(user => user.id === userid);
    return res.json(user);
});

// Post New User
app.post("/api/users", (req, res)=>{
    const newUser = req.body;
    users.push(newUser);
    return res.json(users);
});

// Update User
app.put("/api/users/:userid", (req, res)=>{
    const userid = Number(req.params.userid);
    const updatedUser = req.body;
    const user = users.find(user => user.id === userid);
    Object.assign(user, updatedUser);
    return res.json(user);
});

// Delete User
app.delete("/api/users/:userid", (req, res)=>{
    const userid = Number(req.params.userid);
    users = users.filter(user => user.id !== userid);
    return res.json(users);
});

// sigle user, update, and delete using one route
// app.route("/api/users/:userid")
//     .get((req, res)=>{
//         const userid = Number(req.params.userid);
//         const user = users.find(user => user.id === userid);
//         return res.json(user);
//     })
//     .put((req, res)=>{
//         const userid = Number(req.params.userid);
//         const updatedUser = req.body;
//         const user = users.find(user => user.id === userid);
//         Object.assign(user, updatedUser);
//         return res.json(user);
//     })
//     .delete((req, res)=>{
//         const userid = Number(req.params.userid);
//         users = users.filter(user => user.id !== userid);
//         return res.json(users);
//     });


app.listen(port, ()=> console.log(`Server Started at Port ${port}`));