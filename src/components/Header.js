import React, { useEffect, useState } from "react";

function Header() {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("/sessionCheck").then((res) => {
      if (res.status === 200) {
        setAuth(true);
        res.json().then((data) => {
          setUsername(data.username);
        });
      }
    });
  }, []);

  const handleLogout = () => {
    fetch("/logout")
      .then((res) => {
        window.location.replace("/");
      })
      .catch((err) => {});
  };

  return (
    <header>
      <div className="navbar">
        <img
          src="https://static-00.iconduck.com/assets.00/reddit-logo-icon-512x512-jv3e2p8i.png"
          className="homelogo"
        />
        <div className="h1">School Server </div>
        <ul>
          <li className="dropdown">
            <a href="/">Departments</a>
            <ul className="dropdown-content">
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
            {auth ? (
              <>
                <li>Welcome! {username}</li>
              </>
            ) : (
              <>
                <a href="/">Account</a>
              </>
            )}
            <ul className="dropdown-content">
              {auth ? (
                <>
                  <li>
                    <a href="/logout" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register">Register</a>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
