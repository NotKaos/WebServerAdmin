import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      department: "Computer Science",
      password: "",
    };
    this.submit = this.submit.bind(this);
  }
  submit(data) {
    const { email, username, department, password } = this.state;
    console.log(email, username, department, password);
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "text/html",
      },
      body: JSON.stringify({
        email,
        username,
        department,
        password,
      }),
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => console.log(data, "userRegister"));
  }
  passwordStrength() {
    let password = document.getElementById("password").value; //retreives the password
    let strength_points = 0;

    //below uses regex to scan the password input
    if (/[a-z]/.test(password)) {
      // checks for lowercase letters
      strength_points += 1;
    }

    if (/[A-Z]/.test(password)) {
      // checks for uppcase letters
      strength_points += 1;
    }

    if (/[0-9]/.test(password)) {
      //checks for numbers
      strength_points += 1;
    }

    if (/[$@#&!?%*()-+=/£]/.test(password)) {
      //checks for special characters
      strength_points += 1;
    }

    //below displays the strength of the password depending on how many points it gained above
    if (strength_points === 0) {
      document.getElementById("strength").innerHTML = "Password is very weak";
      document.getElementById("strength").style.color = "red";
      document.getElementById("strengthDivBar").style.background = "red";
      document.getElementById("strengthDivBar").style.visibility = "visible";
      document.getElementById("strengthDivBar").style.width = "33%";
    } else if (strength_points === 1) {
      document.getElementById("strength").innerHTML = "Password is very weak";
      document.getElementById("strength").style.color = "red";
      document.getElementById("strengthDivBar").style.background = "red";
      document.getElementById("strengthDivBar").style.visibility = "visible";
      document.getElementById("strengthDivBar").style.width = "33%";
    } else if (strength_points === 2) {
      document.getElementById("strength").innerHTML =
        "Password is medium strength";
      document.getElementById("strength").style.color = "orange";
      document.getElementById("strengthDivBar").style.visibility = "visible";
      document.getElementById("strengthDivBar").style.background = "orange";
      document.getElementById("strengthDivBar").style.width = "66%";
    } else if (strength_points === 3) {
      document.getElementById("strength").innerHTML = "Password is strong";
      document.getElementById("strength").style.color = "green";
      document.getElementById("strengthDivBar").style.visibility = "visible";
      document.getElementById("strengthDivBar").style.background = "green";
      document.getElementById("strengthDivBar").style.width = "100%";
    } else if (strength_points === 4) {
      document.getElementById("strength").innerHTML = "Password is very strong";
      document.getElementById("strength").style.color = "green";
      document.getElementById("strengthDivBar").style.background = "green";
      document.getElementById("strengthDivBar").style.visibility = "visible";
      document.getElementById("strengthDivBar").style.width = "100%";
    }
  }
  render() {
    return (
      <main>
        <h1 class="center">Haven't got an account yet?</h1>
        <h2 class="center">Register below!</h2>

        <div class="myContainer">
          <form
            id="login"
            action="/Register"
            method="POST"
            onSubmit={this.submit}
          >
            <h3>Account register</h3>
            <p>Required information is marked with an asterisk (*)</p>
            <br />
            <div class="signinfix">
              <label for="email">Email address*:</label>
              <input
                type="email"
                class="input"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={(data) => this.setState({ email: data.target.value })}
              />
              <br />

              <label for="username">Username*:</label>
              <input
                type="text"
                className="input"
                name="username"
                id="username"
                placeholder="Enter a username"
                onChange={(data) =>
                  this.setState({ username: data.target.value })
                }
              />
              <br />

              <label for="department">Department: </label>
              <select
                onChange={(data) => {
                  this.setState({ department: data.target.value });
                }}
                id="department"
                class="input"
                name="department"
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Biology">Biology</option>
                <option value="English">English</option>
                <option value="Philosophy">Philosophy</option>
              </select>
              <br />

              <label for="password">Password*:</label>
              <input
                type="password"
                class="input"
                name="password"
                id="password"
                onChange={(data) => {
                  this.passwordStrength();
                  this.setState({ password: data.target.value });
                }}
                required
                placeholder="Create a password"
              />
              <br />
              <div id="strengthDiv">
                <label id="strength"></label>
              </div>
              <br />
              <div id="strengthDivBar" />
              <br />
            </div>

            <input type="submit" class="button" value="Register" />
            <input type="reset" class="button" value="Reset Form" />
            <br />
            <br />

            <a class="hyperlink" href="/Login">
              {" "}
              Already have an account? Login here!
            </a>
            <br />
          </form>
          <br />
        </div>
      </main>
    );
  }
}

export default Register;
