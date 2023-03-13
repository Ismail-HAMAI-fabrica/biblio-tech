import Reply from "../models/reply.js";

export const addreply = async(req,res)=>{
    const { commentid, userid , reply } = req.body;
  const reply = await Reply.create({ commentid, userid ,reply });
  
  
    res.json({ message: "reply added successfully", reply });
  };