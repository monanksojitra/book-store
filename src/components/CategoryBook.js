import React ,{Link} from "react";
import products from "../data/books.json";
import Navbar from "./Navbar";
import Products from "./Products";


const CategoryBook = ({ category }) => {
  console.log(category);

  const results = products.filter((product) => {
    return product.categories.toString().toLowerCase().includes(category.toString().toLowerCase());
  });
  return (
    <>
    <Navbar/>
      <Products newBooks={results} />
    </>
  );
};

export default CategoryBook;
