import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalProvider";

const BookSearch = () => {
  const { setBooks, books } = useContext(GlobalContext);
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books[0]);
useEffect(()=>{

},[query.length])
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue)
    setQuery(inputValue);
    const filteredBook = filteredBooks.filter((book) => {
      console.log(book)
      const titleMatch = book.title
        .toString()
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const authorMatch = book.authors
        .toString()
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      return titleMatch || authorMatch;
    });
    setFilteredBooks(filteredBook);
    setBooks(filteredBook);
  };

  return (
    <div
      id="search"
      className="container d-flex flex-wrap justify-content-center my-4"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
      >
        <span className="fs-4">List of All Books</span>
      </a>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input
          type="search"
          value={query}
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default BookSearch;
