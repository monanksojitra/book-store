import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserList from "./UserList";
import logo_il from "../imgs/logo_il.jpg";

const UserInfo = () => {
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
  }, [count]);
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
            <a className="dropdown-item" role="button">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
