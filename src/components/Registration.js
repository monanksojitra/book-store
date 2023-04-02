import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalProvider";


const Registration = () => {

  const {registerUser} = useContext(GlobalContext)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      const userDetails = {
        firstName,
        lastName,
        email,
        password,
      };
      registerUser(userDetails); 
      console.log(userDetails)
    }
  };
  return (
    <div
      className="modal modal-signin position-static d-block bg-secondary py-5"
      tabIndex={-1}
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Registration for free</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-5 pt-0">
            <form  onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="monank"
                />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Sojitra"
                />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                Register
              </button>
              <small className="text-muted">
                By clicking register, you agree to the terms of use.
              </small>
              <hr />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
