import React from "react";
import { useHistory } from "react-router-dom";

/**
 * @author
 * @function Register
 **/

const Register = () => {
  const history = useHistory();
  return (
    <div>
      <h2 style={{ marginLeft: 479, marginTop: 25, fontFamily: "sans-serif" }}>
        Register Organization
      </h2>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <br></br>
          <form>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Username
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Username"
                />
              </div>
            </div>
            <br></br>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-9">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                />
              </div>
            </div>
            <br></br>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">
                Confirm Password
              </label>
              <div class="col-sm-9" style={{ marginTop: 13 }}>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <br></br>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Name
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Organization Name"
                />
              </div>
            </div>
            <br></br>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Mail
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Organization Mail"
                />
              </div>
            </div>
            <br></br>
            <div class="form-group row">
              <div class="col-sm-9" style={{ marginLeft: 273 }}>
                <button type="submit" className="btn btn-primary  ">
                  Register
                </button>
              </div>
            </div>
            <p className="account" style={{ marginLeft: 224 }}>
              Already have an account?
            </p>

            <div class="form-group row">
              <div class="col-sm-9" style={{ marginLeft: 280 }}>
                <button
                  onClick={() => {
                    history.push("/login");
                  }}
                  type="submit"
                  className="btn btn-success "
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Register;
