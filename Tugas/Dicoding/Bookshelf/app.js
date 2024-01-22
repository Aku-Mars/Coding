const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;

app.use(bodyParser.json());

let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
];

// API dapat menyimpan buku
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// API dapat menampilkan seluruh buku
app.get('/books', (req, res) => {
  res.json(books);
});

// API dapat menampilkan detail buku
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// API dapat mengubah data buku
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const index = books.findIndex((b) => b.id === bookId);

  if (index !== -1) {
    books[index] = { id: bookId, title, author };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// API dapat menghapus buku
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((b) => b.id !== bookId);
  res.json({ message: 'Book deleted successfully' });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;