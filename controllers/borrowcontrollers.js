import Book from '../models/book.js';
import Borrow from '../models/borrow.js';
import users from '../models/users.js'


// borrowing a book
export const borrow = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the ID exists
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    // Check if available
    if (book.quantity === 0) {
      return res.status(400).json({ error: 'Book not available for borrowing' });
    }

    // Decrement the quantity 
    const updatedBook = await Book.findOneAndUpdate(
      { _id: id, quantity: { $gt: 0 } },
      { $inc: { quantity: -1 } },
      { new: true }
    );

    // Create borrowing 
    const name = req.query.name;
    const bookname = req.query.name;
    
    const borrow = new Borrow({
    borrowedby: name,
    bookname: bookname,
    date: new Date(),
    });
    // Save the borrowing record to the database
    await borrow.save();

    // Return a success message to the user
    return res.json({ message: 'Book borrowed successfully', borrow });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}