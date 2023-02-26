const express = require("express");
const app = express();
// const db = require('./models');
// ++++++++++++++++++++++++++++++ db connection +++++++++++++++++++++
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/biblio').then(()=>{
    console.log('connact')
});




// app.use(express.json());

// app.post("/register",(req,res)=>{
//     res.json("register");
// });
// app.post("/login",(req,res)=>{
//     res.json("login");
// });
// app.get("/profile",(req,res)=>{
//     res.json("profile");
// });
// app.listen(3001,()=>{
//     console.log("SERVER RUNNING ON PORT 3001")
// });

