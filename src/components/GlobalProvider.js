import React, { createContext, useState } from "react";
import allBokks from "../data/books.json"
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [bookCart, setBookCart] = useState([]);
  const [books, setBooks] = useState([allBokks]);
  const [bookFilter, setBookFilter] = useState("");

  const setUser = (user) => {
    setCurrentUser(user);
  };

  const getUser = () => {
    return currentUser;
  };
  

  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        setUser,
        getUser,
        bookCart,
        setBookCart,
        books,
        setBooks,
        bookFilter,
        setBookFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
