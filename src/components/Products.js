import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import CartBooks from "./CartBooks";


const Products = ({books}) => {
  
  
  const [activePage, setActivePage] = useState(1);
  const booksPerPage = 10;
  const totalPages = Math.ceil(books.length / booksPerPage);
  const pageNumbersToShow = 5;
  const pagesToDisplay = [];

  const handleClick = (page) => {
    setActivePage(page);
  };

  const renderBooks = () => {
    const startIndex = (activePage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return books.length!=0?
       books.slice(startIndex, endIndex).map((book) => (
      <div id={book.isbn} className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col-auto d-none d-lg-block mx-3 my-2">
            <img src={book.thumbnailUrl} height={180} width={160} alt="" />
          </div>
          <div className="col p-4 d-flex flex-column position-static">
            <h5 className="mb-0">{book.title}</h5>

            <div className="my-1 text-muted flex-wrap">{book.categories}</div>
            <div className="ml-2">
              <span className="dis-price">
                ₹ {book.pageCount <= 0 ? 234 : book.pageCount}
              </span>
            </div>
            <p className="card-text mb-auto">By : {book.authors} </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => CartBooks.addBook(book)}
                type="button"
              >
                Add
              </button>

              <Link
              id="#readmore"
                className="btn btn-secondary btn-sm "
                to="/readmore"
                state={book}
                role="button"
              >
                Read More.
              </Link>
            </div>
          </div>
        </div>
      </div>
    )): <h3>book is not available</h3>
  };

  const calculatePagesToDisplay = () => {
    if (totalPages <= pageNumbersToShow) {
      return Array.from(Array(totalPages).keys()).map((number) => number + 1);
    }
    const currentPageGroup = Math.ceil(activePage / pageNumbersToShow);
    const firstPageInGroup = (currentPageGroup - 1) * pageNumbersToShow + 1;
    const lastPageInGroup =
      firstPageInGroup + pageNumbersToShow - 1 > totalPages
        ? totalPages
        : firstPageInGroup + pageNumbersToShow - 1;
    for (let i = firstPageInGroup; i <= lastPageInGroup; i++) {
      pagesToDisplay.push(i);
    }
  };
  calculatePagesToDisplay();
  return (<>
    <div id="books" className="row mb-4 mx-5">{renderBooks()}</div>
    {books.length!=0?
      <div className="pagination justify-content-center">
        <Pagination>
          <Pagination.Prev
            disabled={activePage === 1}
            onClick={() => handleClick(activePage - 1)}
          />
          {pagesToDisplay.map((page) => (
            <Pagination.Item
              key={page}
              active={page === activePage}
              onClick={() => handleClick(page)}
            >
              {page}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={activePage === totalPages}
            onClick={() => handleClick(activePage + 1)}
          />
        </Pagination>
      </div>
       : null}
       </>
  );
};
export default Products;
