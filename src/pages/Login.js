import React from "react";
import { login } from "../services/login-service";
import {useNavigate} from "react-router-dom";



const state = {
  email: "",
  password: "",
};

function submit(data) {
  data.preventDefault();
  login(this.state);
}

function HomeButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Home");
  }

  return (
    <main>
      <h1 className="center">Login below</h1>
      <h2 className="center">
        Haven't got an account? Register{" "}
        <a href="/Register">
          <em>
            <u>here</u>
          </em>
        </a>
      </h2>
      <div className="myContainer">
        <form id="login" /*action="" method="POST"*/ onSubmit={submit}>
          <h3>Account login</h3>
          <p>Required information is marked with an asterisk (*)</p>
          <br />
          <div className="signinfix">
            <label htmlFor="email">Email*:</label>
            <input
              type="text"
              className="input"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              onChange={(data) => (state.email = data.target.value)}
            />

            <label htmlFor="password">Password*</label>
            <input
              type="password"
              className="input"
              name="password"
              id="password"
              required
              placeholder="Enter your Password"
              onChange={(data) => (state.password = data.target.value)}
            />
          </div>

          <button input className="button" value="Login" onClick={handleClick}>
            Login
          </button>

          <input type="reset" className="button" value="Reset Form" />
          <br />

          <a className="hyperlink" href="/Register">
            {" "}
            Don't have an account? Create an account here!
          </a>

          <br />
        </form>
        <br />
      </div>
    </main>
  );
}
    



export default HomeButton;