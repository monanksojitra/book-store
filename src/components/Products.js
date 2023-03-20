import React, { useEffect, useState } from "react";
import BookData from "../data/books.json";
import ProductSearchbar from "./ProductSearchbar";
import ReadMore from "./ReadMore";
const Products = ({newBooks}) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    newBooks.length == 0 ? setBooks(BookData) : setBooks(newBooks);
  },[newBooks.length]);

  return (
    <>

     
      <div className="row mb-4 mx-5">
        {books.map((book) => {
          return (
            <div id={book.isbn} className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-auto d-none d-lg-block mx-3 my-2">
                  <img src={book.thumbnailUrl} height={180} width={160} alt="" />
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                  <h5 className="mb-0">{book.title}</h5>

                  <div className="my-1 text-muted flex-wrap">
                    {book.categories}
                  </div>
                  <div className="ml-2">
                    <span className="dis-price">₹ {book.pageCount <= 0 ? 234 : book.pageCount}</span>

                  </div>
                  <p className="card-text mb-auto">By : {book.authors} </p>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                    <button className="btn btn-primary btn-sm" type="button">
                      Add
                    </button>
                    <a className="btn btn-secondary btn-sm " onClick={(book) => { <ReadMore data={book} /> }} role="button">
                      Read More.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
