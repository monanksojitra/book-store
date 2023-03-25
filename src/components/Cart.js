import React, { useEffect, useState } from "react";
import "../css/cart.css";

import Navbar from "./Navbar";
import CartBooks from "./CartBooks";
import { Link } from "react-router-dom";

const Cart = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const data = CartBooks.getBooks();
    setBooks(data);
  }, [books.length]);

  return (
    <>
      <Navbar />
      {/* <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>

              {books.map((bookData) => {
                return (
                  <div key={bookData.id} className="card rounded-3 mb-4">
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
                              CartBooks.removeBook(bookData.id);
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
      </section> */}
      <div className="container my-1">
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-md-9">
              <div className="ibox">
                <div className="ibox-title d-flex">
                  <h5 className="mx-2">Items in your cart</h5>
                  <span className="pull-right">
                    (<strong>{books.length}</strong>) items
                  </span>
                </div>
                {!books.length == 0 ? (
                  books.map((bookData) => (
                    <div className="ibox-content">
                      <div className="table-responsive">
                        <table className="table shoping-cart-table">
                          <tbody>
                            <tr>
                              <td>
                                <div>
                                  <img
                                    width={90}
                                    src={bookData.thumbnailUrl}
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td className="desc">
                                <h3>
                                  <Link
                                    to="/readmore"
                                    state={bookData}
                                    className="text-navy"
                                  >
                                    {bookData.title}
                                  </Link>
                                </h3>
                                <p className="small ">
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is
                                </p>
                                <dl className="small m-b-none">
                                  <dt>Description lists</dt>
                                  <dd>
                                    A description list is perfect for defining
                                    terms.
                                  </dd>
                                </dl>
                                <div className="m-t-sm">
                                  <a href="#" className="text-muted mx-2">
                                    <i className="fa fa-gift" /> Add gift
                                    package
                                  </a>
                                  |
                                  <a href="#" className="text-muted mx-2">
                                    <i className="fa fa-trash" /> Remove item
                                  </a>
                                </div>
                              </td>
                             
                              <td width={65}>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={1}
                                />
                              </td>
                              <td>
                                <h4>$180,00</h4>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))
                ) : (
                  <figure className="text-center mt-3">
                    <blockquote className="blockquote">
                      <p className="h4">Add item in cart..!</p>
                    </blockquote>
                  </figure>
                )}
              </div>
            </div>
            {!books.length == 0 ? (
              <div className="col-md-3">
                <div className="ibox">
                  <div className="ibox-title">
                    <h5>Cart Summary</h5>
                  </div>
                  <div className="ibox-content">
                    <span>Total</span>
                    <h2 className="font-bold">$390,00</h2>
                    <hr />
                    <span className="text-muted small">
                      *For United States, France and Germany applicable sales
                      tax will be applied
                    </span>
                    <div className="m-t-sm my-3">
                      <div className="btn-group mx-2">
                        <a href="#" className="btn btn-primary btn-sm mx-2">
                          <i className="fa fa-shopping-cart" /> Checkout
                        </a>
                        <a href="#" className="btn btn-white btn-sm">
                          Cancel
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ibox">
                  <div className="ibox-title">
                    <h5>Support</h5>
                  </div>
                  <div className="ibox-content text-center">
                    <h3>
                      <i className="fa fa-phone" /> +43 100 783 001
                    </h3>
                    <span className="small">
                      Please contact with us if you have any questions. We are
                      avalible 24h.
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
