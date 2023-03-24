import React, { useEffect, useState } from "react";
import logo from "../imgs/logo.png";
const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");

    if (!hasVisited) {
      setShowLogin(true);
      localStorage.setItem("visited", "true");
      document.body.style.pointerEvents = "none";
      document.body.style.opacity = 0.5;
    }
  }, []);

  const handleClose = () => {
    setShowLogin(false);
    // Re-enable background window
    document.body.style.pointerEvents = "auto";
    document.body.style.opacity = 1;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add user to array
    const user = { email, password };
    setUsers([...users, user]);
    // Once login is successful, close the popup and re-enable background window
    handleClose();
    // const handleLogin = () => {
    //   setShowLogin(true);
    //   // Disable background window
    //   document.body.style.pointerEvents = "none";
    //   document.body.style.opacity = 0.5;
    // };
  };
  return (
    <>
      {showLogin && (
        <div className="text-center popup-container m-auto w-25 mt-5   ">
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
            <button
              className="w-50 btn btn-lg btn-primary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
