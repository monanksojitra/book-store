import React, { useState } from "react";
import AdsBook from "../components/AdsBook";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import ProductSearchbar from "../components/ProductSearchbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Login />
      <Navbar />
      <AdsBook />
      <ProductSearchbar filterbook={setBooks} />
      <Products newBooks={books} />
    </>
  );
};

export default Home;

// constructor(props) {
//   super(props);
//   this.state = {
//     title: this.props.title,
//     dis: this.props.dis
//   };
// }

// const userData = [
//   { id: 1, name: 'monank' },
//   { id: 2, name: 'raj' },
//   { id: 3, name: 'ashish' },
// ];
// const Users = HOC(UserList, userData);

{
  /* <h1>Home form Home.js</h1> 
        <h3>{this.state.title}</h3>
        <h3>{this.state.dis}</h3>
        <List/>
        <Counter/> */
}
{
  /* <Users/> */
}
