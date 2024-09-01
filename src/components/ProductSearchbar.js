import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalProvider";

const BookSearch = () => {
  const { setBooks, books } = useContext(GlobalContext);
 
  const [query, setQuery] = useState("");
  const [allBooks, setAllbooks] = useState(books);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    const filteredBook = allBooks.filter((book) => {
      return book.title
      .toString()
      .toLowerCase()
      .includes(inputValue.toLowerCase()) || book.authors
      .toString()
      .toLowerCase()
      .includes(inputValue.toLowerCase())
    });
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
      <div className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default BookSearch;
