import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo_il from "../imgs/logo_il.jpg";
import { GlobalContext } from "./GlobalProvider";

const UserInfo = () => {
  const {currentUser , signout} = useContext(GlobalContext);
  return (
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
            <a onClick={()=>signout} className="dropdown-item" role="button">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default UserInfo;
