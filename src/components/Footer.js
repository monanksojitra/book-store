import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
const Footer = () => {
  return (
    <div className="d-flex flex-column h-100 mx-4">
      {/* <section className="hero text-white py-5 flex-grow-1">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="display-4">Bootstrap footer bottom</h1>
              <p className="fst-italic text-muted">
                Using Bootstrap 5 flexbox utilities, create a footer that always
                sticks to the bottom of your viewport. Snippet by{" "}
                <a
                  className="text-primary"
                  href="https://bootstrapious.com/"
                  target="_blank"
                >
                  Bootstrapious
                </a>
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="d-flex flex-wrap justify-content-between align-items-center my-2 py-2 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>
        <a
        
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <a className="navbar-brand" href='#home'>
            <img src={logo} height={70} />
          </a>
        </a>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#books" className="nav-link px-2 text-body-secondary">
              Books
            </a>
          </li>
          <li className="nav-item">
            <a href="#search" className="nav-link px-2 text-body-secondary">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link px-2 text-body-secondary">
              About
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
