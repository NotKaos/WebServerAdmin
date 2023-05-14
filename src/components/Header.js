import React from "react";

class Header extends React.Component{
    render(){
        return (
          <header>
            <div class="navbar">
              <img
                src="https://static-00.iconduck.com/assets.00/reddit-logo-icon-512x512-jv3e2p8i.png"
                class="homelogo"
              />
              <div class="h1">School Server </div>
              <ul>
                <li class="dropdown">
                  <a href="/">Departments</a>
                  <ul class="dropdown-content">
                    <li>
                      <a href="/computerScience">Computer Science</a>
                    </li>
                    <li>
                      <a href="/biology">Biology</a>
                    </li>
                    <li>
                      <a href="/english">English</a>
                    </li>
                    <li>
                      <a href="/philosophy">Philosophy</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="/">Account</a>
                  <ul className="dropdown-content">
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <li>
                      <a href="/register">Register</a>
                    </li>
                    <li>
                      <a href="#">Account</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </header>
        );
    }
}

export default Header;