import React from "react";
import { login } from "../services/login-service";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.submit = this.submit.bind(this);
  }

  submit(data) {
    data.preventDefault();
    login(this.state);
  }

  render() {
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
          <form id="login" action="/login" method="POST" onSubmit={this.submit}>
            <h3>Account login</h3>
            <p>Required information is marked with an asterisk (*)</p>
            <br />
            <div className="signinfix">
              <label htmlFor="username">Username*:</label>
              <input
                type="text"
                className="input"
                name="username"
                id="username"
                required
                placeholder="Enter your Username"
                onChange={(data) => this.setState({ email: data.target.value })}
              />

              <label htmlFor="password">Password*</label>
              <input
                type="password"
                className="input"
                name="password"
                id="password"
                required
                placeholder="Enter your Password"
                onChange={(data) =>
                  this.setState({ password: data.target.value })
                }
              />
            </div>

            <input type="submit" className="button" value="Login" />
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
}

export default Login;