let books = [];

function addBook(book) {
  books.push(book);
  console.log(books)
}

function removeBook(id) {
  books = books.filter(book => book.id !== id);
}

function getBooks() {
  return books;
}

export default { addBook , removeBook , getBooks };