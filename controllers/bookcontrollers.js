import Book from "../models/book.js";
// get all books
export const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};
// get contity
export const findcontityByName = async (req, res) => {
    const { name } = req.body;
    const books = await Book.find({ name });
    const quantities = books.map(book => book.quantity);
    res.json({message:`the number of books is ${quantities}`});
  };
// add book
export const addBook = async (req, res) => {
  const { name, author, category , quantity } = req.body;
  const book = await Book.create({ name, author ,category ,quantity });
  res.json({ message: "Book added successfully", book });
};
// delet a book
export const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  await Book.findByIdAndDelete(bookId);
  res.json({ message: "Book deleted successfully" });
};
// filtr by name
export const findBookByName = async (req, res) => {
  const { name } = req.body;
  const books = await Book.find({ name });
  res.json(books);
};
// filter by catigory
export const findBookBycatgory = async (req, res) => {
    const { category } = req.body;
    const books = await Book.find({ category });
    res.json(books);
  };
//   filtre by author
  export const findBookByauthor = async (req, res) => {
    const { author } = req.body;
    const books = await Book.find({ author });
    res.json(books);
  };
  

 