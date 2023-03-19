import React from 'react'
import logo from '../imgs/logo.png'
const Login = () => {
  return (
    <div className="text-center">
      <div className="form-signin m-auto w-25">
        <form>
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
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating my-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
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

  )
}

export default Login
