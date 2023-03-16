import Note from "../models/note.js";





export const bultan = async(req,res)=>{
    const role = req.user.role
  if (role !== "emploier"){
    res.status(404).json("you ar not user")
  }
        const username = req.user.username;
        const {math,arab,kabil,franch} = req.body;
        const sum=(math*3 + arab*4 + kabil*6 + franch*1);
        console.log(sum);
        let resulta = (sum/14);
        console.log(resulta);
        const Comment = await Note.create({ username,math, arab ,kabil,franch,resulta });
        res.json({'its done':Comment})
}