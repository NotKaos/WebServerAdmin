import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header>
<div class="navbar">

<img src="https://static-00.iconduck.com/assets.00/reddit-logo-icon-512x512-jv3e2p8i.png" class="homelogo"/>
<div class="h1">School Server </div>
<ul>
    <li class="dropdown">
        <a href="#">Departments</a>
        <ul class="dropdown-content">
          <li><a href="#">Computer Science</a></li>
          <li><a href="#">Biology</a></li>
          <li><a href="#">TBA</a></li>
          <li><a href="#">TBA</a></li>
          </ul>
        </li>
    <li><a href="#">Account</a></li>
    <li><a href="#">About</a></li>
</ul>
</div>
            </header>
        )
    }
}

export default Header;