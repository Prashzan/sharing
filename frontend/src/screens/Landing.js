import React from "react";

const Landing = ({ history }) => {
  const Handleclick = () => {
    history.push("/profile");
  };

  return (
    <div className="row">
      <h1 style={{ marginTop: 20, marginLeft: 150 }}>
        Welcome to the Online Exaination System
      </h1>
      <div style={{ marginTop: 30, marginLeft: 500 }}>
        <button
          onClick={() => {
            history.push("/Register");
          }}
          type="button"
          class="btn btn-primary"
        >
          Register
        </button>
      </div>
      <div style={{ marginTop: 30, marginLeft: 508 }}>
        <button
          onClick={() => {
            history.push("/login");
          }}
          type="button"
          class="btn btn-dark"
        >
          Login
        </button>
      </div>
      <div>
        <button
          onClick={Handleclick}
          style={{ marginTop: 30, marginLeft: 508 }}
          className="btn btn-primary"
        >
          Go to Profile
        </button>
      </div>
    </div>
  );
};
export default Landing;
