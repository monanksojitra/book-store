import React, { useState } from 'react';
import products from '../data/amazon.books.json';

const ProductSearchbar = ({setBook}) => {

  const handleSearch = e => {
    const query = e.target.value.toLowerCase();
    const results = products.filter(product => {
      return product.title.toLowerCase().includes(query) ||
        product.author.toLowerCase().includes(query)
    });
    setBook(results)
    console.log(results)
  };

  return (
    <input type="search"
    className="form-control"
    placeholder="Search..."
    aria-label="Search"  onChange={handleSearch} />
  );
};

export default ProductSearchbar;
