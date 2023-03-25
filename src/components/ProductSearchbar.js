import React, { useState } from 'react';
import products from '../data/amazon.books.json';

const ProductSearchbar = ({ filterbook }) => {

  const handleSearch = e => {
    const query = e.target.value.toLowerCase();
    const results = products.filter(product => {
      return product.title.toString().toLowerCase().includes(query) ||
        product.author.toString().toLowerCase().includes(query)
    });
    filterbook(results)
    console.log(results)
  };

  return (
    <div id="search"  className="container d-flex flex-wrap justify-content-center my-4">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
      >

        <span className="fs-4">List of All Books</span>
      </a>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">

        <input type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search" onChange={handleSearch} />
      </form>
    </div>

  );
};

export default ProductSearchbar;
