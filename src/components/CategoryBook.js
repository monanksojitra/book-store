import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalProvider";
import Navbar from "./Navbar";
import Products from "./Products";

const CategoryBook = ({ category }) => {
  const { setBookFilter, bookFilter, books } = useContext(GlobalContext);
  const results = books.filter((product) => {
    return product.categories
      .toString()
      .toLowerCase()
      .includes(category.toString().toLowerCase());
  });
  useEffect(() => {
    setBookFilter(results);
  }, [results.length]);
  return (
    <>
      <Products books={results} />
    </>
  );
};

export default CategoryBook;
