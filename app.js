import  express   from 'express';
import mongoose from 'mongoose';// Hide Mongoose deprecation warnings
import User from './models/users.js';



mongoose.set('strictQuery', true);
const app=express();

mongoose.connect("mongodb+srv://ismailkun:madarakun0123@hamaiismail.nqf3s2v.mongodb.net/?retryWrites=true&w=majoritymongodb+srv://riadhidir5:bIKlHStd0ezgzaFQ@cluster0.aha4g2i.mongodb.net/Cluster0?retryWrites=true&w=majority").then(()=>{
app.listen(3000, ()=>{console.log('http://localhost:3000')});
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

