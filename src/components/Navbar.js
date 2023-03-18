import React from "react";
import AdsBook from "./AdsBook";
import Registration from "./Registration";

const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid mx-4 my-1">
                <a className="navbar-brand" href="#">
                    Navbar
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
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                        <a className="nav-link" href="#">
                            Features
                        </a>
                        <a className="nav-link" href="#">
                            Pricing
                        </a>
                        <a className="nav-link disabled">Disabled</a>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <form className="w-100 me-3" role="search">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>
                    <div className="flex-shrink-0 dropstart">
                        <a
                            href="#"
                            className="d-block link-dark text-decoration-none dropdown-toggle"
                            data-bs-toggle="dropdown"
                          
                        >
                            <img
                                src="https://github.com/mdo.png"
                                alt="mdo"
                                width={32}
                                height={32}
                                className="rounded-circle"
                            />
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                            <li>
                                <a className="dropdown-item" href="#">
                                    New project...
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </nav>
        {/* <AdsBook/> */}
        <Registration />
    </>
    );
};

export default Navbar;
