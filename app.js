import  express   from 'express';
import mongoose from 'mongoose';
import cookieparser from 'cookie-parser';
import {validateToken} from './JWT.js';
import { login, register , profil } from './controllers/userscontrollers.js'
import { addBook, deleteBook, findBookByauthor, findBookBycatgory, findBookByName, findcontityByName } from './controllers/bookcontrollers.js';
import { borrow } from './controllers/borrowcontrollers.js';
const app=express();


// Hide Mongoose deprecation warnings++++++++++++++++++++++++++++++
mongoose.set('strictQuery', true);

 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cookieparser());
//  login signin ++++++++++++++++++++++++++++++++++++++++++++++++++++
app.post('/register',register);
app.post('/login',login);
app.get('/profil',validateToken,profil);


 //  CRUD de la librerai ++++++++++++++++++++++++++++++++++++++

 app.post('/books/add',addBook); 
 app.delete('/books/delet/:id',deleteBook);
 app.post('/books/findcatigory',findcontityByName);  
 
 
 
//  find book by name ++++++++++++++++++
 app.post('/books/findbyname',findBookByName);
 app.post('/books/findbyauthor',findBookBycatgory);
 app.post('/books/findbycatgory',findBookByauthor); 

//  borrow books
 app.post('/borrow/:id',borrow);



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

