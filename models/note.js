import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const noteSchema = new Schema({
    username:{
        type:String, 
        required:true, 
        unique : true
    },
    math:{
        type:Number,
        required:true,
        min:0,
        max:20
    },
    arab:{
        type:Number,
        required:true,
        min:0,
        max:20
    },
    kabil:{
        type:Number,
        required:true,
        min:0,
        max:20
    },
    franch:{
        type:Number,
        required:true,
        min:0,
        max:20
    },
    resulta:{
        type:Number,
        required:true,
        min:0,
        max:20
    },
});
const Note = model('Note', noteSchema);
export default Note;