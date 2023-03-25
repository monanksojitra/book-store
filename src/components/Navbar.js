import React, { useEffect, useState } from "react";
import logo from "../imgs/logo.png";
import logo_il from "../imgs/logo_il.jpg";
import { Link } from "react-router-dom";
import UserList from "./UserList";
const Navbar = () => {
  const [currentUser, setcurrentUser] = useState({
    name: "guest",
    email: "",
  });
  let count = currentUser.name.length + currentUser.email.length;
  useEffect(() => {
    const user = UserList.getCurrentUser();
    setcurrentUser({
      name: user.name,
      email: user.email,
    });
    console.log("from state", currentUser);
    console.log("from user list", user);
    console.log("count ", count);
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-3 my-1">
          <a className="navbar-brand" href="#">
            <img src={logo} height={50} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/Internet">
                Internet
              </Link>
              <Link className="nav-link" to="/Java">
                Java
              </Link>
              <Link className="nav-link" to="/PowerBuilder">
                PowerBuilder
              </Link>
              <Link className="nav-link" to="/Programming">
                Programming
              </Link>
            </div>
          </div>

          <Link to="/cart">
            <svg
              width={25}
              className="mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </Link>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 dropstart">
              <a
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  src={logo_il}
                  alt="mdo"
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <Link className="dropdown-item">
                    <p className="fw-bold m-0 p-0">{currentUser.name}</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <p className="fw-bold m-0 p-0">{currentUser.email}</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Register">
                    Register
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" role="button">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* <Registration/> */}

      {/* <Cart/> */}
      {/* <AddProduct/> */}
      {/* <ReadMore/> */}
    </>
  );
};

export default Navbar;
