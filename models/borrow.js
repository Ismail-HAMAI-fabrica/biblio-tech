import mongoose from "mongoose";
const { Schema, model } = mongoose;
// const options = {
//     discriminatorKey : 'role',
//     timestamps:true 
    
// }
const borrowSchema = new Schema({
    bookname:{
        type:String,
        required:true,
    },
    borrowedby:{
        type:String,
        required:true,
    },
    date: {
        type: Date, 
        default: Date.now ,
        required:true,
    }
    
});
const Borrow = model('Borrow', borrowSchema);
export default Borrow;
