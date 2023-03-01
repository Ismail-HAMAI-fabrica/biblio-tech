import  express   from 'express';
import mongoose from 'mongoose';
import { addBook, deleteBook, findBookByName, findcontityByName } from './controllers/bookcontrollers.js';
const app=express();


// Hide Mongoose deprecation warnings++++++++++++++++++++++++++++++
mongoose.set('strictQuery', true);

 app.use(express.json());
 app.use(express.urlencoded({extended:true}));

 //  CRUD de la librerai ++++++++++++++++++++++++++++++++++++++

 app.post('/books/add',addBook); 
 app.delete('/books/delet/:id',deleteBook);
 app.post('/books/findcatigory',findcontityByName);  
 
 
 
//  find book by name ++++++++++++++++++
 app.post('/books/findbyname',findBookByName);
 app.post('/books/findbyauthor',findBookByName);
 app.post('/books/findbycatgory',findBookByName);
 app.post('/books/find',findBookByName);



// mongo atlas connection +++++++++++++++++++++++
mongoose.connect("mongodb+srv://ismailkun:madarakun0123@hamaiismail.nqf3s2v.mongodb.net/?retryWrites=true&w=majority").then(()=>{
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

