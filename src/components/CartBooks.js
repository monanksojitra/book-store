import Toast from "./Toast";
let books = [];


function addBook(book) {
  books.push(book);
  Toast.info("Book is added..!")
  console.log(books)
}

function removeBook(id) {
  books = books.filter(book => book.id !== id)
  console.log("remove")
  Toast.warn("Book Remove..!")
}

function getBooks() {
  return books;
}

export default { addBook , removeBook , getBooks };