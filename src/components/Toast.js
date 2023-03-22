import React, { useState, useEffect,Link } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import logo from "../imgs/logo.png";

{
  /* <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <img src="..." className="rounded me-2" alt="..." />
    <strong className="me-auto">Bootstrap</strong>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="toast"
      aria-label="Close"
    />
  </div>
  <div className="toast-body">Hello, world! This is a toast message.</div>
</div> */
}



function Toast() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showLogin, setShowLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        handleShow();
      const hasVisited = localStorage.getItem("visited");
      if (!hasVisited) {
        setShowLogin(true);
        localStorage.setItem("visited", "true");
        document.body.style.pointerEvents = "none";
      document.body.style.opacity = 0.5;
      }
    }, []);
    
   
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Add user to array
      const user = { email, password };
      setUsers([...users, user]);
      // Once login is successful, close the popup and re-enable background window
      handleClose();
    }

        useEffect(() => {
    
  }, []);

  return (
    <>
     
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>{showLogin && (
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
              <h1 className="h3 mb-3 fw-normal">Please Login</h1>
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
              <div className="form-floating my-4">
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

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Login
              </button>
              <p className="mt-5 mb-3 text-muted">© 2022–2023</p>
            </form>
          </div>
        </div>
      
      )}</Modal.Body>
      </Modal>
    </>
  );
}

export default Toast;
