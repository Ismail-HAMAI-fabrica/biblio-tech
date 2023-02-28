import Book from "../models/book";

export const getAllBooks =(req,res)=>{
    const book = Book.find().then((result)=>{
        res.json(result); 
    })
}
export  const addBook  =async(req,res)=>{
    const book = await Book.create({
        name:req.body.name,
        auther:req.body.auther,
        date:req.body.date

    });

    res.json('categorie ajouté')
}
// Book.find({ description: { $regex: /a/ } }, (err, docs) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(docs);
//     }
//   });