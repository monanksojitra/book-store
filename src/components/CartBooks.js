import Toast from "./Toast";
let books = [];

function addBook(book) {
  books.push(book);
  Toast.info("Book is added..!");
}

function removeBook(id) {
  books = books.filter((book) => book.id !== id);
  Toast.warn("Book Remove..!");
}

function getBooks() {
  return books;
}

export { addBook, removeBook, getBooks };
