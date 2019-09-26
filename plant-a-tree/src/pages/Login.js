import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="pagelayout">
      <div className="login-page">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="pass"
              placeholder="Enter password"
            />
          </div>
          <input type="checkbox" name="rememberme" value="Remember" /> Remember
          me <br /> <br />
          <Link to="/login/forget-password">Forgot Password</Link> <br /> <br />
          <button width="135px" color="#F4FF77" radius="50px" class="btnitem">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
