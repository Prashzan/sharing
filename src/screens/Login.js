import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div>
      <h2>Organizational Login</h2>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-4">
          <div className="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Password"
            />
          </div>

          <button type="button" className="btn btn-outline-primary">
            Login
          </button>

          <p>Have not Registered Yet ?</p>
          <button
            onClick={() => {
              history.push("/register");
            }}
            type="button"
            className="btn btn-outline-info"
          >
            Register
          </button>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Login;
