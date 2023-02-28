import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// const options = {
//     discriminatorKey : 'role',
//     timestamps:true 
// }
const bookSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    auther:{
        type:String,
        required:true,
    },
    disponibility:{
        type:Number,
        enum: ['disponble', 'borrowed'],
        required:true,
    }
});
const Book = model('Book', BookSchema);
export default Book;
