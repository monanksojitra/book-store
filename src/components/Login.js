import React, { useState, useEffect, Link, useContext } from "react";
import { Modal } from "react-bootstrap";
import logo from "../imgs/logo.png";
import { GlobalContext } from "./GlobalProvider";
import Toast from "./Toast";

function Login() {
  const globalProvider = useContext(GlobalContext);
  const { currentUser , checkCredentials } = globalProvider
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  useEffect(() => {
    setTimeout(() => {
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
    if (checkCredentials(email, password)) {
      Toast.success("User Login successfully");
      handleClose();
    } else {
      Toast.error("User Login unsuccessful");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
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

export default Login;
