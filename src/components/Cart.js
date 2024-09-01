import React, { useContext } from "react";
import { getBooks, removeBook } from "./CartBooks";
import "../css/cart.css";
import { GlobalContext } from "./GlobalProvider";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const { currentUser, bookCart } = useContext(GlobalContext);
  if (!currentUser) {
    return <h1>Please Login</h1>;
  }
  return (
    <>
      {
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                </div>

                {getBooks().map((bookData, index) => {
                  return (
                    <div
                      key={bookData.id + index}
                      className="card rounded-3 mb-4"
                    >
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={bookData.thumbnailUrl}
                              className="img-fluid w-75 rounded-3"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">
                              {bookData.title}
                            </p>
                            <p>{bookData.authors}</p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2">
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button className="btn btn-link px-2"></button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">
                              ₹
                              {bookData.pageCount < 1
                                ? "234"
                                : bookData.pageCount}
                            </h5>
                          </div>

                          <div className="col-md-1 col-lg-1 col-xl-1 text-end mx-3  ">
                            <button
                              className="btn btn-link px-2"
                              onClick={() => {
                                removeBook(bookData.id);
                              }}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Cart;
