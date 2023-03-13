import Commenter from "../models/commenter.js";

export const addcomment = async(req,res)=>{
    const { bookid, userid , comment } = req.body;
  const Comment = await Commenter.create({ bookid, userid ,comment });
  
  
    res.json({ message: "comment added successfully", Comment });
  };