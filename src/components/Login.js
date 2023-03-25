import React, { useState, useEffect, Link } from "react";
import { Modal } from "react-bootstrap";
import UserList from "./UserList";
import logo from "../imgs/logo.png";
import Toastjs from "./Toast";


function Toast() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const currentUser = UserList.getCurrentUser();

      if (currentUser.name === "guest") {
        handleShow();
        const hasVisited = localStorage.getItem("visited");

        if (!hasVisited) {
          setShowLogin(true);
          localStorage.setItem("visited", "true");
          document.body.style.pointerEvents = "none";
          document.body.style.opacity = 0.5;
        }
      }
    }, 4000);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (UserList.checkCredentials(email, password)) {
      Toastjs.success("User Login successfully");
    } else {
      Toastjs.error("User Login unsuccessful");
    }
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          onClick={() => {
            <Toast message="Login is not active" />;
          }}
        ></Modal.Header>
        <Modal.Body>
          {showLogin && (
            <div className="text-center popup-container mx-5">
              <div className="form-signin popup">
                <form onSubmit={handleFormSubmit}>
                  <img
                    className="mb-2"
                    src={logo}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mt-4 mb-2">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <p className="text-muted">
                    By clicking Sign up, you agree to the terms of use.
                  </p>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <p className="mt-5 mb-3 text-muted">© 2022–2023</p>
                </form>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Toast;
