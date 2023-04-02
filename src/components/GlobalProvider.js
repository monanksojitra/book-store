import React, { createContext, useState } from "react";
import allBokks from "../data/books.json";
import Toast from "./Toast";
const users = [
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password: "admin",
  },
  {
    firstName: "monank",
    lastName: "sojitra",
    email: "monaksojitra@gmail.com",
    password: "monank123",
  },
];

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "guest",
    email: "guest@guest.com",
  });
  const [bookCart, setBookCart] = useState([]);
  const [books, setBooks] = useState(allBokks);
  const [bookFilter, setBookFilter] = useState([]);

  const registerUser = (user) => {
    const isUserExists = users.some((u) => u.email === user.email);
    if (isUserExists) {
      Toast.error("Error: User with this email already exists");
    } else {
      users.push(user);
      Toast.success("User registered successfully");
    }
  };
  const checkCredentials = (email, password) => {
    for (let user of users) {
      if (user.email === email && user.password === password) {
        setCurrentUser({ name: user.firstName, email: user.email });
        return true;
      }
    }
    return false;
  };
  const signout = () => {
    setCurrentUser({ name: "guest", email: "guest@guest.com" });
    Toast.info("SignOut..!");
  };
  const addBook = (book) => {
    setBookCart([...bookCart, book]);
    Toast.info("Book is added..!");
  };
  const getBookcart = () => {
    return bookCart;
  };
  const removeBook = (id) => {
    setBookCart([books.filter((book) => book.id !== id)]);
    console.log("remove");
    Toast.warn("Book Remove..!");
  };

  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        currentUser,
        bookCart,
        signout,
        setBookCart,
        books,
        setBooks,
        bookFilter,
        setBookFilter,
        registerUser,
        checkCredentials,
        addBook,
        removeBook,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
